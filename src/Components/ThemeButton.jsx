import React, { useState, useEffect } from "react";
import Moon from '../public/Moon.svg';
import Sun from '../public/Sun.svg';


export default function ThemeButton() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

    }, [isDark]);
    return (
            <button className="svg-img-button" onClick={() => setIsDark((prev) => !prev)}>
                <img src={isDark ? Sun : Moon} alt="Moon" />
            </button>
    );

}