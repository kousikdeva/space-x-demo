import React, { useEffect, useState } from 'react'

const DynamicForm = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [requiredFields, setRequiredFields] = useState([]);
    const [properties, setProperties] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    useEffect(() => {
        // Simulate API response
        const response = {
            properties: {
                name: { type: "string", description: "name" },
                gender: { type: "string", description: "some genders", enum: ["male", "female", "others"] },
                age: { type: "number", description: "age" },
                amount: { type: "number", description: "give an amount", pattern: "^[0-9]{4}$" }
            },
            required: ["name", "age", "amount"]
        };

        const initialForm = {};
        const initialErrors = {};

        Object.keys(response.properties).forEach((key) => {
            initialForm[key] = "";
            initialErrors[key] = null;
        });

        setFormData(initialForm);
        setErrors(initialErrors);
        setRequiredFields(response.required);
        setProperties(response.properties);
    }, []);

    const validateField = (field, value) => {
        const isRequired = requiredFields.includes(field);
        const rules = properties[field];

        if (isRequired && !value) {
            return "This field is required";
        }

        if (rules.pattern) {
            const regex = new RegExp(rules.pattern);
            if (!regex.test(value)) {
                return "Invalid format";
            }
        }

        return null; // No error
    };

    const handleInputChange = (field, value) => {
        const error = validateField(field, value);

        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    useEffect(() => {
        const requiredValid = requiredFields.every(
            (field) => formData[field] && errors[field] === null
        );

        setIsButtonDisabled(!requiredValid);
    }, [formData, errors, requiredFields]);




    return (
        <div>
            {Object.entries(properties).map(([field, config]) => (
                <div key={field}>
                    <label>{config.description || field}</label>
                    {config.enum ? (
                        <select
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                        >
                            <option value="">Select</option>
                            {config.enum.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={config.type === "number" ? "number" : "text"}
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                        />
                    )}
                    {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
                </div>
            ))}

            <button disabled={isButtonDisabled} onClick={() => console.log(formData)}>Upload</button>
            <button onClick={() => window.location.reload()}>Cancel</button>
        </div>
    );

}

export default DynamicForm