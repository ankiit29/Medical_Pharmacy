import React, { useEffect, useState } from "react";

function ViewPrescription() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // fetch the stored files from local storage
    const items = JSON.parse(localStorage.getItem("items")) || { files: [] };
    setFiles(items.files);
  }, []);

  return (
    <div className="container-fluid text-center my-3">
      <h5>Uploaded Prescriptions with Prices</h5>

      <div className="mt-5">
        {files.length === 0 ? (
          <p>No files uploaded with prices.</p>
        ) : (
          <ul>
            {files
              .filter((file) => file.price !== undefined)
              .map((file, index) => (
                <li key={index}>
                  <a href={file.data} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                  <br />
                  <p>Details about Price and Pharmacist : {file.price}</p>
                  <hr />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewPrescription;
