import React, { useEffect, useState } from "react";

function VUpload() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // fetch the stored files from local storage
    const items = JSON.parse(localStorage.getItem("items")) || { files: [] };
    setFiles(items.files);
  }, []);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index] = { ...updatedFiles[index], [name]: value };
      return updatedFiles;
    });
  };

  const handleSendClick = () => {
    // update local storage with the modified files array
    localStorage.setItem("items", JSON.stringify({ files }));
    alert("Price sent successfully!");
  };

  return (
    <div className="container-fluid text-center my-3">
      <h5>Uploaded Prescriptions</h5>

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
                <br />
                <div className="input-group mb-3 my-3 container-sm">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="write here......."
                    name="price"
                    value={file.price}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-primary mx-3"
                    onClick={handleSendClick}
                  >
                    Send
                  </button>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default VUpload;
