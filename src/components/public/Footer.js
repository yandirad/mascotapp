import React, { useState } from 'react'

export const Footer = () => {

    const [clicks, setClicks] = useState(0);

    const year = new Date().getFullYear();
    const owner = "yandirad";

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between border-top">
                <p className="text-muted">&copy; {year} {owner} Perrito apretado {clicks} veces</p>
                <span 
                    className="col-md-3 d-flex align-items-center justify-content-center link-dark text-decoration-none"
                    onClick={handleClick}
                    >
                    
                    <img
                        className="App-logo"
                        height="52"
                        src="mascotapp/dog.png"
                        alt="perro-giratorio"
                    />
                </span>

                <ul className="nav col-md-3 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}
