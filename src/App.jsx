import React from "react";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

export default function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <About />
            <Portfolio />
            <ContactMe />
        </>
    )
}