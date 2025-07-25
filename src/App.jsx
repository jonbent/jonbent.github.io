import React, {Component} from 'react';
// import logo from './logo.svg';
import './scss/reset.scss';
import './App.scss';
import Splash from './ui/Splash'

const navLinks = ["Home", "Projects"];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: 0,
            currentPageIndex: 0
        };
        this.changeIndex = this.changeIndex.bind(this);
    }
    changeIndex(idx){
        this.setState({
            currentPageIndex: idx
        });
    }
    render(){
        const {currentPageIndex}= this.state;
        return (
            <div className="App">
                <nav className="nav">
                    <div className="same-page">
                        {navLinks.map((el, idx) => {
                            return <span key={idx} className={currentPageIndex === idx ? "selected" : ""} onClick={() => this.changeIndex(idx)}>
                                {el}
                            </span>
                        })}
                    </div>
                    <div className="download">
                        <span onClick={() => this.changeIndex(2)} className={currentPageIndex === 2 ? "selected" : ""}>
                            <img src="images/social/resume.svg" alt="Resume"/>
                            Resume
                        </span>
                    </div>
                    <div className="new-page">
                        <a href="https://github.com/jonbent" target="_blank" rel="noopener noreferrer">
                            <img src="images/social/octicon.svg" alt="Github"/>
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/jon-bent/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/linkedin.svg" alt="LinkedIn"/>
                            LinkedIn
                        </a>
                        <a href="https://wellfound.com/u/jon-bent-1" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/wellfound.webp" alt="AngelList"/>
                            Wellfound
                        </a>
                    </div>
                </nav>
                <Splash currentPageIndex={currentPageIndex} changeIndex={this.changeIndex}/>
            </div>
        );
    }
}

export default App;
