import React from "react";
import './PDFUploader.css'
import Upload from '../../assets/upload.png';

const PDFUploader = () => {
  return (
    <div className="upload-section">
      <p>Upload Your Invoice</p>
      <p className="upload-info">To auto-populate fields and save time</p>
      <div className="upload-image">
        <img src={Upload} alt="Upload" />
      </div>
      <button className="upload-btn">Upload File ↑</button>
      <p className="upload-link">Click to upload</p>
    </div>
  );
};

export default PDFUploader;
