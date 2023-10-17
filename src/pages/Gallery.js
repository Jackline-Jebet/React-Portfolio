import React, { useRef, useState, useEffect } from 'react';
import Photos from '../components/Photos';
import "../styles/Gallery.css";
import { useIsAuthenticated } from '../helpers/authHelpers';

function Gallery(props) {
    const isAuthenticated = useIsAuthenticated();
    const photosRef = useRef(null);
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    const toggleImageSelection = (imageSrc) => {
        if (selectedImages.includes(imageSrc)) {
            setSelectedImages(prev => prev.filter(img => img !== imageSrc));
        } else {
            setSelectedImages(prev => [...prev, imageSrc]);
        }
    };

    const handleDeleteSelected = async () => {
        for (let imgSrc of selectedImages) {
            // If the image source starts with 'http://localhost:5000/uploads/', it means it's a server image
            if (imgSrc.startsWith('http://192.168.0.104:5000/uploads/')) {
                const imageName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1);
                
                // Here you can add your delete logic
                try {
                    const response = await fetch(`http://192.168.0.104:5000/api/delete/${imageName}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        setImages(prevImages => prevImages.filter(img => img !== imgSrc));
                    } else {
                        throw new Error('Failed to delete photo');
                    }
                } catch (error) {
                    console.error("Error deleting the photo:", error);
                }
            }
        }
        
        // After deletion, clear the selected images
        setSelectedImages([]);
    };
    
    




    useEffect(() => {
        // Fetching images from the server
        const fetchImages = async () => {
            try {
                const response = await fetch('http://192.168.0.104:5000/api/getImages');
                const serverImages = await response.json();
                
                // Merge the local and server images
                // setImages(serverImages.map(img => `http://localhost:5000/uploads/${img}`));
                setImages(serverImages.map(img => `http://192.168.0.104:5000/uploads/${img}`));




      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  

    const scrollPhotosLeft = () => {
        if (photosRef.current) {
            photosRef.current.scrollBy({
                left: -300, // Adjust as needed
                behavior: 'smooth'
            });
        }
    };

    const scrollPhotosRight = () => {
        if (photosRef.current) {
            photosRef.current.scrollBy({
                left: 300, // Adjust as needed
                behavior: 'smooth'
            });
        }
    };

    const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('photo', file);
        try {
            const uploadResponse = await fetch("http://192.168.0.104:5000/api/upload", {
                method: "POST",
                body: formData,
            });

            if (uploadResponse.ok) {
                // Refresh the page after successful upload
                window.location.reload();
            } else {
                console.error("Error uploading the photo:", uploadResponse.statusText);
            }

        } catch (error) {
            console.error("Error uploading the photo:", error);
        }
    }
};

    return (
        <div className='gallery'>
           <h3>My Gallery</h3>
            <input type="file" id="photoUpload" style={{ display: "none" }} onChange={handleUpload} />
            
             {/* Pass the images to the Photos component */}
             <Photos ref={photosRef} images={images} selectedImages={selectedImages} onToggleSelect={toggleImageSelection} />

            <button id='prevBtn' className='nav-btn' onClick={scrollPhotosLeft}>&#10094;</button>
            <button id='nextBtn' className='nav-btn' onClick={scrollPhotosRight}>&#10095;</button>

            <div className='image-button'>
            {isAuthenticated && (
                <>
            <button onClick={() => document.getElementById('photoUpload').click()}>Upload Photo</button>
            <button onClick={handleDeleteSelected}>Delete Image</button> 
            </>
            )} 
            </div>
        </div>
    );
}

export default Gallery;