import React, {Component} from 'react';
import Arrow from "../../svg/Arrow";
import GitHubCalendar from 'react-github-calendar';

const Begin = ({changeIndex}) => {
    return (
        <div className="Begin">
            <div className="description-container">
                <img className="headshot" src="images/headshot_small.png" alt="Jon Bent"/>
                <h4>Hey, I'm Jon</h4>
                <div className="description">
                    <div>
                        <p>I'm a mostly self taught software engineer with a background in Web and Android Development. I real world work experience as an Associate Software Engineer, Android Developer and Founding Engineer whos task it was to build an iOS and Android application from scratch.</p>
                        <p>I keep myself in grounded in technology in my off-time through multiple passion projects. Most recently I am working on an AI powered routine creation iOS/Android application utilizing React Native and OpenAI</p>
                        <p>If you have a second, click the arrow below and check out my projects! You'll find some games, finance management applications, among some other cool stuff.</p>
                    </div>
                </div>
                <Arrow className="next-arrow" onClick={() => changeIndex(1)}/>
                <div className="garden">
                    <GitHubCalendar username="jonbent" style={{overFlowX: "scroll"}}/>
                </div>
            </div>
        </div>
    );
}

export default Begin;
