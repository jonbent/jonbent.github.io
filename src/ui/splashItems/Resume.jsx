import React, {useState} from 'react';
import '../../scss/Resume.scss'
import {Document, Page} from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Arrow from "../../svg/Arrow";

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const Resume = ({changeIndex}) => {
    const [pageNum, setPageNum] = useState(1);
    const [numPages, setNumPages] = useState(1)
    const onDocLoad = ({numPages}) => {
        setNumPages(numPages);
    }
    return (
        <div className="Resume">
            <Document file="files/jon_bent_resume.pdf" onLoadSuccess={onDocLoad} options={options}>
                <Page pageNumber={pageNum} renderMode="canvas" scale={1.5}/>
            </Document>
            <a href="/files/jon_bent_resume.pdf" download="jon_bent_resume.pdf">Download my resume</a>
            <div><Arrow className="back-arrow" onClick={() => changeIndex(1)}/></div>
        </div>
    );
};

export default Resume;
