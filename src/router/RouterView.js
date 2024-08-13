import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'

const RouterView = () => {

    const getElement = (parent) => {
        return (
            <parent.component />
        )
    }

    const getRoutes = (parent) => {
        return (
            <Route key={parent.path} path={parent.path} element={getElement(parent)}>
                {parent.children && parent.children.map(child => getRoutes(child))}
            </Route>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                {routes?.map(parent => getRoutes(parent))}
            </Routes>
        </BrowserRouter>
    )
}

export default RouterView