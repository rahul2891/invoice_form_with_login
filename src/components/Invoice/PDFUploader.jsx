import React, { useState } from "react";
import './PDFUploader.css';
import Upload from '../../assets/upload.png';

const PDFUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File uploaded:", uploadedFile);
    }
  };

  const handleUploadClick = () => {
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="upload-section">
      <p>Upload Your Invoice</p>
      <p className="upload-info">To auto-populate fields and save time</p>
      <div className="upload-image">
        <img src={Upload} alt="Upload" />
      </div>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input" className="upload-btn">
        Click to upload or drap and drop
      </label>
      <button className="upload-btn" onClick={handleUploadClick}>
        Upload File ↑
      </button>
      {file && <p className="upload-link">Selected File: {file.name}</p>}
    </div>
  );
};

export default PDFUploader;