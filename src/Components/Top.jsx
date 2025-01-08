import Moon from '../assets/Moon.svg';
import Sun from '../assets/Sun.svg';
import React, { useState, useEffect } from "react";

export default function Top() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

    }, [isDark]);

    return (
        <>
            <div id="top">
                <h1>Leonardo Miščević</h1>
                <button className="svg-img-button" onClick={() => setIsDark((prev) => !prev)}>
                    <img src={isDark ? Sun : Moon} alt="Moon" />
                </button>
            </div>
            <hr className='tophr' />
        </>
    )
}