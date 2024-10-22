import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const username = sessionStorage.getItem('username'); // Get username from session storage

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!username) return; // Exit if no user is logged in

      try {
        const response = await axios.get(`http://localhost:8080/${username}/images`);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching user photos:', error);
      }
    };

    fetchPhotos();
  }, [username]);

  return (
    <div>
      <h2>My Photos</h2>
      <div>
        {photos.length > 0 ? (
          photos.map(photo => (
            <div key={photo.id}>
              <h3>{photo.title}</h3>
              <img src={`data:image/jpeg;base64,${photo.image}`} alt={photo.title} />
            </div>
          ))
        ) : (
          <p>No photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyPhotos;
