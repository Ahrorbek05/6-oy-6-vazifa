import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

function Register() {
    const [photos, setPhotos] = useState([]);
    const [startId, setStartId] = useState('');
    const [endId, setEndId] = useState('');
    const [filterFoto, setFilter] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => {
            console.error("Xatolik!", error);
        });
}, []);

function filterPhotos() {
    const start = parseInt(startId, 10);
    const end = parseInt(endId, 10);
    if (!isNaN(start) && !isNaN(end)) {
        const filtered = photos.filter(photo => photo.id >= start && photo.id <= end);
        setFilter(filtered);
    }
}

return (
        <div className={styles.App}>
            <h1>API</h1>
            <div className={styles['filter-container']}>
                <input
                    type="number"
                    placeholder="Boshlang'ich ID ni kiriting!"
                    value={startId}
                    onChange={(e) => setStartId(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Oxirgi ID ni kiriting!"
                    value={endId}
                    onChange={(e) => setEndId(e.target.value)}
                />
                <button onClick={filterPhotos}>Filter</button>
            </div>
            <div className={styles['card-container']}>
                {filterFoto.map(photo => (
                    <div key={photo.id} className={styles.card}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <h3>{photo.title}</h3>
                        <h3>{photo.id}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Register;
