import React from 'react';

import '../scss/Splash.scss'
import Begin from "./splashItems/Begin";
import Projects from "./splashItems/Projects";
import Resume from "./splashItems/Resume";


const Splash = ({currentPageIndex, changeIndex}) => {
    const nav = document.querySelector('.nav');
    if (currentPageIndex === 2 && nav) nav.style.backgroundColor = "rgba(0,0,0,0.5)";
    else if (nav) nav.style.backgroundColor = null;
    return (
        <div className="Splash" style={{transform: `translateX(-${currentPageIndex * 100}%)`}}>
            <Begin changeIndex={changeIndex}/>
            <Projects changeIndex={changeIndex}/>
            <Resume changeIndex={changeIndex}/>
        </div>
    );
}

export default Splash;
