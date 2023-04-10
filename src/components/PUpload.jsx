import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function PUpload() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    // update the state with the selected file
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const fileObject = {
        name: file.name,
        type: file.type,
        size: file.size,
        data: URL.createObjectURL(file),
      };

      // store the file object in local storage
      const items = JSON.parse(localStorage.getItem("items")) || { files: [] };
      items.files.push(fileObject);
      localStorage.setItem("items", JSON.stringify(items));

      // update the state to display the uploaded files
      setFiles(items.files);

      alert("Your file has been uploaded.");
    } else {
      alert("Please select a file to upload.");
    }
  };

  useEffect(() => {
    // fetch the stored files from local storage
    const items = JSON.parse(localStorage.getItem("items")) || { files: [] };
    setFiles(items.files);
  }, []);

  return (
    <>

    <div className="container-fluid text-center my-3">
      <h5>Upload Your Prescription</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group container-fluid text-center mt-3">
          <input
            type="file"
            id="file-upload"
            className="form-control-file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <small className="form-text text-muted">
            Accepted file types: .pdf, .jpg, .jpeg, .png
          </small>
        </div>
        <button type="submit" className="btn btn-primary my-5 mx-5">
          Upload
        </button>
        <Link to="/ViewPrescription">
        <button type="button" className="btn btn-primary ">View Updated Prescriptions</button>
        </Link>
      </form>

      <div className="mt-5">
        {files.length === 0 ? (
          <p>No files uploaded.</p>
        ) : (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a href={file.data} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <div className="container-fluid text-center my-5">
      
    </div>
    
    </>
  );
}
export default PUpload;
