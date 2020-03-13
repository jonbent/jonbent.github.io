import React, {Component} from 'react';
import Arrow from "../../svg/Arrow";
import GitHubCalendar from 'github-calendar'
import '../../scss/garden.css';
class Begin extends Component {
    componentDidMount() {
        GitHubCalendar('.garden', 'jonbent', {responsive: true}).then(() => {
            document.querySelectorAll('rect[fill="#ebedf0"]').forEach(el => el.style.fill = "rgba(0,0,0,0.5)");
            document.querySelector('li[style="background-color: #ebedf0"]').style.backgroundColor = "rgba(0,0,0,0.5)";
            document.querySelectorAll('rect[fill="#c6e48b"]').forEach(el => el.style.fill = "#BFCDE0");
            document.querySelector('li[style="background-color: #c6e48b"]').style.backgroundColor = "#BFCDE0";
            document.querySelectorAll('rect[fill="#7bc96f"]').forEach(el => el.style.fill = "#5D5D81");
            document.querySelector('li[style="background-color: #7bc96f"]').style.backgroundColor = "#5D5D81";
            document.querySelectorAll('rect[fill="#239a3b"]').forEach(el => el.style.fill = "#3B3355");
            document.querySelector('li[style="background-color: #239a3b"]').style.backgroundColor = "#3B3355";
            document.querySelectorAll('rect[fill="#196127"]').forEach(el => el.style.fill = "#2f2842");
            document.querySelector('li[style="background-color: #196127"]').style.backgroundColor = "#2f2842";
        });
    }

    render() {
        return (
            <div className="Begin">
                <div className="headshot">
                    <img src="images/headshot_small.png" alt="Jon Bent"/>
                </div>
                <div className="description-container">
                    <div className="description">
                        <div>Hey, I'm Jon</div>
                        <div>A Software Engineer with a nack for troubleshooting, and an interest in anything technology</div>
                        <div>Check out my projects!</div>
                    </div>
                    <div><Arrow rotate={270} onClick={() => this.props.changeIndex(1)}/></div>
                    <div className="garden">

                    </div>
                </div>
            </div>
        );
    }
}

export default Begin;