import React from 'react'

import {
    Routes, Route
} from 'react-router-dom'

import Home from "../pages/Home.js"
import About from "../pages/About.js"
import Projects from "../pages/Projects.js"
import Contact from "../pages/Contact.js"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    )
}