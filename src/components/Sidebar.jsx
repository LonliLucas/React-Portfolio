// eslint-disable-next-line no-unused-vars
import React from "react";
import {SidebarData} from "./SidebarData";

export default function Sidebar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div className="sidebar">
            <ul>
                {SidebarData.map((val, key) => (
                    <li key={key} onClick={() => scrollToSection(val.section)}> 
                        <div>{val.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}