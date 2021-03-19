
import React,{useState,useEffect} from  'react';
import samplePDF from "/Users/harrisonreid/shirlene/src/Pages/Home/microcert.pdf";
import gds from "//Users/harrisonreid/shirlene/src/Pages/Home/gds.pdf";
import resume from "/Users/harrisonreid/shirlene/src/Pages/Home/resume.pdf"
import { Document, Page,pdfjs } from 'react-pdf';
import './cert.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdfview(){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfile,setPDF]=useState(resume);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const changePDF = (event) => {
    setPDF(event.target.value);
  };
  function singlebutton(){
    setPDF(resume)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  const DownloadButton = props => {
    const downloadFile = () => {
      window.location.href = {pdfile}
    }
    return (
              <button onClick={downloadFile} />
    )
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  useEffect(()=>{
    console.log(pdfile)
  },[pdfile]);

  return(
  <div className='grid-container'>
    <div className='sidespace'></div>
      <div className='sidebar'>
        <h2 className='certexplorer'>Certificate Explorer</h2>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Microsoft Certificates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pdfile}
          onChange={changePDF}
        >
          <MenuItem value={samplePDF}>Certified Data Analyst Associate </MenuItem>
       </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Google Certificates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pdfile}
          onChange={changePDF}
        >
          <MenuItem value={gds}>Intro to Google Data Studio</MenuItem>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">AWS Certificates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pdfile}
          onChange={changePDF}
        >
       </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Other/Misc Certificates</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pdfile}
          onChange={changePDF}
        >
       </Select>
      </FormControl>
      <button onClick={singlebutton} className='button3'>Display Resume</button>
    <div><hr className='divider'></hr></div>
      <div className='explorernav'>
        <p className='currentpage'>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className='prevpage'
        >
          <ChevronLeftIcon/>Previous
        </button>
        <button
          type="button"
          className='nextpage'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next<ChevronRightIcon/>
        </button>
        <a className = 'download' under href={pdfile} download> Download Current PDF</a>
      </div>
      </div>
        <div className='pdf'>
        <div className='file'>
        <Document
        file={pdfile}
        className='file'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}  />
      </Document>
      </div>
      
        </div>
        <div className='sidespaceright'></div>
  </div> 
);
}


export default Pdfview;