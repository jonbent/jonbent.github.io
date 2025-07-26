import React, {Component, useEffect} from 'react';
import ProjectItem from "./ProjectItem";
import '../../scss/Projects.scss'
import Arrow from "../../svg/Arrow";
const projects = [
    {
        name: "BakedMaps",
        description: "A pixel perfect clone of weedmaps, using an undocumented API to fetch real time data.",
        liveUrl: "https://baked-maps.com",
        githubUrl: "https://github.com/jonbent/bakedmaps",
        images: ['images/projects/baked-maps/baked-maps-splash.png', 'images/projects/baked-maps/bakery-show.gif', 'images/projects/baked-maps/baked-maps-map.png']
    },
    {
        name: "Dumbells N Donuts",
        description: "Dumbells-N-Donuts is a mobile friendly fitness website, which hopes to help manage user's workouts and meals in a flexible way.\n\nA user can decide to choose from already defined exhaustive list of meals and exercises or have their own custom meals and form a routine.",
        liveUrl: "https://dumbells-n-donuts.herokuapp.com",
        githubUrl: "https://github.com/jonbent/dumbells-n-donuts",
        images: ['images/projects/dumbells-n-donuts/dumbells-splash.gif', 'images/projects/dumbells-n-donuts/user-show.png', 'images/projects/dumbells-n-donuts/muscle-selector.png']
    },
    {
        name: "BuildAVirus",
        description: "Upgrade a sample virus until you either kill off the entire world, or the world builds immunity to you. Users are given a couple viruses to choose to start from.\n\nKilling off more people will award more points, which in turn allows upgrades to be purchased.",
        liveUrl: "https://jonbent.github.io/BuildAVirus/",
        githubUrl: "https://github.com/jonbent/buildavirus",
        images: ['images/projects/build-a-virus/map-show.png', 'images/projects/build-a-virus/map-gif.gif', 'images/projects/build-a-virus/world-news.gif']
    },
    {
        name: "Ask Jon",
        description: "I built an app for my fellow cohort mates to use when stuck on a coding problem at AppAcademy.\n\nAs soon as you ask a question, I get a text, and I head right to you!",
        liveUrl: "https://ask-jon.herokuapp.com/#/",
        githubUrl: "https://github.com/jonbent/AskAQuestion",
        images: ['images/projects/ask-jon/queue.png', 'images/projects/ask-jon/splash.gif']
    },
    {
        name: "Mile Log",
        description: "Track mileage and expenses for tax return purposes, this was created to be helpful for service workers in the field of doordash, Uber Eats, and Grubhub drivers, among other service jobs",
        githubUrl: "https://github.com/jonbent/MileLog",
        images: ['images/projects/mile-log/mile-log.png']
    },
    {
        name: "Wholesale Motors",
        description: "At one point my father had lost his advertising manager, due to him moving away. His website was no longer updated with new stock, and instead displayed cars that were unavailable due to already being sold. This website was built to take place of his website with a more modern feel.",
        githubUrl: "https://github.com/jonbent/ws-motors",
        images: ['images/projects/ws-motors/wsMotors.png'],
    },
    {
        name: "Wholesale Motors Debt Tracker",
        description: "My dad keeps track of all of his inhouse financing in a simple paper binder, this was an attempt to replace that functionality, and let his customers keep track of their upcoming payments/remaining debt",
        githubUrl: "https://github.com/jonbent/ws-motors-debt",
        images: ["images/projects/ws-motors-debt/ws-motors-debt.png"]
    }
];
const Projects = ({changeIndex}) => {

    useEffect(() => {
        const nav = document.querySelector('.nav');
        document.querySelector(".Projects").addEventListener('scroll', function () {
            if (this.scrollTop > 0 && nav){
                nav.style.backgroundColor = "rgba(0,0,0,0.5)";
            } else if(nav) {
                nav.style.backgroundColor = null;
            }
            //
        })
    }, []);


    return (
        <div className="Projects">
            <h2 className="coming-soon-title">Coming Soon</h2>
            <ProjectItem project={{
                name: "Dumbells n Donuts React Native App",
                description: "This is a new implementation on a past project, I am attempting to revamp the application to be deployed on iOS and Android App Stores.\n\nThis implementation will be powered by AI through OpenAI to assist in creating workout/meal routines",
                images: ['images/projects/dumbells-n-donuts/dumbells-splash.gif']
            }}/>

            <h2 className="past-projects-title">Past Projects</h2>
            {projects.map(p => {
                return <ProjectItem key={p.name} project={p} />
            })}
            <div>
            <Arrow className="back-arrow" onClick={() => changeIndex(0)}/>
            <Arrow className="next-arrow" onClick={() => changeIndex(2)}/>
            </div>
        </div>
    );

};

export default Projects;
