import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '/Users/harrisonreid/shirlene/src/CourseCertificate.pdf'

function pdf() {
  return (
    <div className="App">
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
    <div id="pdfviewer">
        <Viewer fileUrl={filePDF} /> 
    </div>
    </Worker>
    </div>
  );
}
export default pdf;