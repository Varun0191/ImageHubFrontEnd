import React, { useState } from 'react';
import axios from 'axios';

const UploadPhoto = () => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [domain, setDomain] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log FormData for debugging
    const formData = new FormData();
    formData.append('title', title);
    formData.append('domain', domain);
    formData.append('photo', photo);
    formData.append('username', username); // Include username from input

    try {
      const response = await axios.post('http://localhost:8080/saveImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading image: ' + (error.response?.data?.message || error.message));
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Domain:</label>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} required />
        </div>
        <div>
          <label>Photo:</label>
          <input type="file" onChange={handlePhotoChange} accept="image/*" required />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadPhoto;
