import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
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
        <HashRouter>
            <Routes>
                {routes?.map(parent => getRoutes(parent))}
            </Routes>
        </HashRouter>
    )
}

export default RouterView