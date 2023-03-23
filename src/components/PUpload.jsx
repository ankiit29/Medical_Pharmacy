import React, {  useEffect , useState } from "react";

function PUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    // update the state with the selected file
    setFile(event.target.files[0]);
  };

  let photoArray = [];

  
  const [items, setItems] = useState({ files: [] });

  useEffect(() => 
  {
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   setItems(items);
   console.log(items);
  }

}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      // perform the file upload logic here
      console.log("File uploaded:", file);

      photoArray.push(file);
      items.files.push(file);
      localStorage.setItem("items", JSON.stringify(items));
      console.log(items);

      alert("Your file has been Uploaded");
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="container-fluid text-center my-3">
      <div className="container-fluid text-center my-3">
        <h5>Upload Your Prescription</h5>
      </div>
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
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}

export default PUpload;
