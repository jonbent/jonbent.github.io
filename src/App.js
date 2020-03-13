import React, {Component} from 'react';
// import logo from './logo.svg';
import './scss/reset.scss';
import './App.scss';
import Splash from './ui/Splash'
const splashImages = [
    "bird-shadow.jpg",
    "galaxy.jpg",
    'war.jpg',
    "cant-swim.jpg",
    "cpus.jpg",
    "my-comp.jpeg",
    "eye-with-person.jpg",
    'lord-ring.jpg',
    'never-failed-never-tried.jpg',
    'keep-on-digging.jpg',
    // 'not-doing-shit.jpg',
    // 'not-gonna-survive.jpg',
    'tomb-raider.jpg',
    'up.jpg',

];
const navLinks = ["Home", "Projects"];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: 0,
            currentPageIndex: 0
        };
        this.updateBackgroundImage = this.updateBackgroundImage.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
    }
    componentDidMount(){
        setInterval(this.updateBackgroundImage, 10000);
    }
    changeIndex(idx){
        this.setState({
            currentPageIndex: idx
        });
    }
    updateBackgroundImage(){
        this.setState({
            backgroundImage: (this.state.backgroundImage + 1) % splashImages.length
        })
    }
    render(){
        const {currentPageIndex, backgroundImage}= this.state;
        return (
            <div className="App" style={{backgroundImage: `url(/images/${splashImages[backgroundImage]})`}}>
                <nav className="nav">
                    <div className="same-page">
                        {navLinks.map((el, idx) => {
                            return <span key={idx} className={currentPageIndex === idx ? "selected" : ""} onClick={() => this.changeIndex(idx)}>
                                {el}
                            </span>
                        })}
                    </div>
                    <div className="download">
                        <span onClick={() => this.changeIndex(2)}>
                            <img src="/images/social/resume.svg" alt="Resume"/>
                            Resume
                        </span>
                    </div>
                    <div className="new-page">
                        <a href="https://github.com/jonbent" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/octicon.svg" alt="Github"/>
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/jon-bent/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/linkedin.svg" alt="LinkedIn"/>
                            LinkedIn
                        </a>
                        <a href="https://angel.co/jon-bent-1" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/angellist.svg" alt="AngelList"/>
                            AngelList
                        </a>
                    </div>
                </nav>
                <Splash currentPageIndex={currentPageIndex} changeIndex={this.changeIndex}/>
            </div>
        );
    }
}

export default App;
