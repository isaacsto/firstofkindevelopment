import React from "react";
import "../../App.css";

const styles = {
  contStyle: {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#C3A32C"
  }
}

const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/assets/IS_Resume.pdf';
    downloadLink.download = 'IS_Resume.pdf';
    downloadLink.click();
  };

  return ( 
    <div classNam="resCont" style={styles.contStyle}> 
    <div className="resume-page">
      <h1 className="skills">skills...</h1>
      <div class="circle"
      onClick={handleDownload}>
     <p className="tools">
      HTML <br></br>
      CSS<br></br>
      JAVASCRIPT<br></br>
      NODE.JS<br></br>
      EXPRESS<br></br>
      SQL /
      NOSQL<br></br>
      REACT <br></br>
      </p>
        </div>
        </div>
    </div>
  )
}


export default Resume;