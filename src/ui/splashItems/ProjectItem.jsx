import React, {Component} from 'react';

import '../../scss/ProjectItem.scss'

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPicture: 0,
            github: false,
            linkedin: false
        };
        this.changePicture = this.changePicture.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.startChange = this.startChange.bind(this);
    }
    componentDidMount() {
        this.changeStarted = false;
        this.startChange();
    }
    startChange(){
        if (this.props.project.images.length <= 1) return;
        const minInt = 5000;
        const maxInt = 8000;
        const rand = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
        if (this.changeStarted) this.changePicture();
        else this.changeStarted = true;
        setTimeout(this.startChange, rand);
    }
    changePicture(){

        this.setState({currentPicture: (this.state.currentPicture + 1) % this.props.project.images.length })
    }
    handleMouse(field, val){
        this.setState({
            [field]: val,
        })
    }
    render(){
        const {project} = this.props;
        return (
            <div className="ProjectItem">
                <div className="picture" style={{backgroundImage: `url(${project.images[this.state.currentPicture]})`}}></div>
                <div className="title-and-desc">
                    <div className='title'>
                        {project.name}
                    </div>
                    <div className='description'>
                        {project.description}
                    </div>
                    <div className="actions">
                        {project.githubUrl && <div className="github-link">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
                        </div>}
                        {project.liveUrl && <div className="linked-link">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
                        </div>}
                    </div>
                </div>

            </div>
        );

    }
};

export default ProjectItem;
