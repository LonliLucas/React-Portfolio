import { useState } from "react";
// import logo from "logo"

const navItems = ["h", "p"];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="inner">
                <header>
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="icon">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                    {/* <img src={logo} /> */}
                    <p>hey</p>
                </header>
                <nav>
                    {navItems.map((item) => (
                        <button key ={item} type="button">
                            <span className="icon">{item}</span>
                            <p>{item}</p>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    )
}