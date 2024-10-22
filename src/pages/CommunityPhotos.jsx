import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunityPhotos = () => {
  const [communityPhotos, setCommunityPhotos] = useState([]);

  useEffect(() => {
    const fetchCommunityPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllImages');
        setCommunityPhotos(response.data);
      } catch (error) {
        console.error('Error fetching community photos:', error);
      }
    };

    fetchCommunityPhotos();
  }, []);

  return (
    <div>
      <h2>Community Photos</h2>
      <div>
        {communityPhotos.length > 0 ? (
          communityPhotos.map(photo => (
            <div key={photo.id}>
              <h3>{photo.title}</h3>
              <img src={`data:image/jpeg;base64,${photo.image}`} alt={photo.title} />
            </div>
          ))
        ) : (
          <p>No community photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommunityPhotos;
