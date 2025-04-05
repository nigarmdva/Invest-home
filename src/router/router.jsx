import React from 'react'
import { createBrowseRouter } from 'react-router-dom'
import Home from '../layout/Home/Home'
createBrowseRouter({
    routes: [
        {
            path: '/',
            element: <Home/>,
        }
    ]
})