import { useState } from 'react'

function App() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div>
      <h1>Upload an Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  )
}

export default App
