import { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title) {
      return alert("all field are required !");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/images",
        formData
      );

      setResponse("Image Uploaded");
    } catch (err) {
      console.error(err);
      alert("Upload Failed!");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="სათაური"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input type="file" accept="image/*" onChange={onFileChange} />

          {preview && <img src={preview} alt={title} />}

          <button type="submit">OK</button>
        </form>
      </div>
    </>
  );
}

export default App;
