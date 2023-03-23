import   { useEffect  , useState} from "react";
import React from "react";
function VUpload() {
    const image = document.getElementsByClassName("Pimg");
    const [items, setItems] = useState([]);

    useEffect(() => 
    {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
     console.log(items.files);
    }
  
  }, []);

  return (
    <div>
        < img src="" className='Pimg' alt="" />
    </div>
  )
}

export default VUpload
