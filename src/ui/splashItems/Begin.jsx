import React, {Component} from 'react';
import Arrow from "../../svg/Arrow";
import GitHubCalendar from 'github-calendar';
import '../../scss/garden.scss';
class Begin extends Component {
    componentDidMount() {
        GitHubCalendar('.garden', 'jonbent', {responsive: true}).then(() => {
            document.querySelectorAll('rect[data-level="0"]').forEach(el => el.style.fill = "rgba(0,0,0,0.5)");
            document.querySelectorAll('rect[data-level="4"]').forEach(el => el.style.fill = "#BFCDE0");
            document.querySelectorAll('rect[data-level="3"]').forEach(el => el.style.fill = "#5D5D81");
            document.querySelectorAll('rect[data-level="2"]').forEach(el => el.style.fill = "#3B3355");
            document.querySelectorAll('rect[data-level="1"]').forEach(el => el.style.fill = "#2f2842");
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
