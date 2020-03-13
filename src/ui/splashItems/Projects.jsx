import React, {Component} from 'react';
import ProjectItem from "./ProjectItem";
import '../../scss/Projects.scss'
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
    }
];
class Projects extends Component {
    componentDidMount() {
        const nav = document.querySelector('.nav');
        document.querySelector(".Projects").addEventListener('scroll', function () {
            if (this.scrollTop > 0 && nav){
                nav.style.backgroundColor = "rgba(0,0,0,0.5)";
            } else if(nav) {
                nav.style.backgroundColor = null;
            }
            //
        })
    }

    render(){
        return (
            <div className="Projects">
                {projects.map(p => {
                    return <ProjectItem key={p.name} project={p} />
                })}
            </div>
        );
    }

};

export default Projects;