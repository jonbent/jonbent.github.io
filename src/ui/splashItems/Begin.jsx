import {useEffect, useRef, useState} from 'react';
import Arrow from "../../svg/Arrow";
import GitHubCalendar from 'react-github-calendar';
import "../../scss/Begin.scss";
import {Box, CircularProgress, circularProgressClasses, Container, Stack, Tooltip} from '@mui/material'

const calendarTheme = {
    light: ["#E0FBFC", '#C2DFE3', '#9DB4C0', '#5C6B73', '#253237'],
    dark: ["#E0FBFC", '#C2DFE3', '#9DB4C0', '#5C6B73', '#253237']
}

const Begin = ({changeIndex}) => {
    const calendarRef = useRef();

    const [loadingCalendar, setLoadingCalendar] = useState(true);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            setLoadingCalendar(false);
            observer.disconnect();
            console.log(document.getElementById("calendar-container").style)
        })

        if (calendarRef.current) observer.observe(calendarRef.current, {
            childList: true,
            subtree: true,
        })
        const nav = document.querySelector('.nav');
        document.querySelector(".Begin").addEventListener('scroll', function () {
            if (this.scrollTop > 0 && nav){
                nav.style.backgroundColor = "rgba(0,0,0,0.5)";
            } else if(nav) {
                nav.style.backgroundColor = null;
            }
            //
        })
    });


    return (
        <div className="Begin">
            <div className="description-container">
                <img className="headshot" src="images/headshot_small.png" alt="Jon Bent"/>
                <h4 id="name-title">Hey, I'm Jon</h4>
                <div className="description">
                    <div>
                        <p>I'm a mostly self taught software engineer with a background in Web and Android Development. I real world work experience as an Associate Software Engineer, Android Developer and Founding Engineer whos task it was to build an iOS and Android application from scratch.</p>
                        <p>I keep myself in grounded in technology in my off-time through multiple passion projects. Most recently I am working on an AI powered routine creation iOS/Android application utilizing React Native and OpenAI</p>
                        <p>If you have a second, click the arrow below and check out my projects! You'll find some games, finance management applications, among some other cool stuff.</p>
                    </div>
                </div>
                <Arrow className="next-arrow" onClick={() => changeIndex(1)}/>
                <div className="garden" ref={calendarRef}>
                    {loadingCalendar && <Container id="github-loading-container">
                        <p id="loading-text">Loading Github Garden</p>
                      <svg width={0} height={0}>
                        <defs>
                          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#7cea9c" />
                            <stop offset="100%" stopColor="#DBDBDB" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
                    </Container>}
                    <div id="calendar-container" style={{display: loadingCalendar ? "none" : "flex"}}>
                        <GitHubCalendar
                            username="jonbent"
                            style={{overFlowX: "scroll"}}
                            theme={calendarTheme}
                            renderBlock={(block, activity) => (
                                <Tooltip title={`${activity.count} activities on ${activity.date}`}>{block}</Tooltip>
                            )}
                            renderColorLegend={(block, level) => (
                                <Tooltip title={`Level: ${level}`}>{block}</Tooltip>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Begin;
