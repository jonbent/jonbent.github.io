import React, {useState} from 'react';
import '../../scss/Resume.scss'
import {Document, Page} from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const Resume = () => {
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
        </div>
    );
};

export default Resume;
