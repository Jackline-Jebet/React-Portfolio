// import React, { useEffect, useRef} from 'react';
// import event1Video from '../assets/videos/event 1.mp4';
// import event2Video from '../assets/videos/event 2.mp4';
// import event3Video from '../assets/videos/event 3.mp4';
// import event4Video from '../assets/videos/event 4.mp4';
// import event5Video from '../assets/videos/event 5.mp4';
// import event6Video from '../assets/videos/event 6.mp4';
// import "../styles/Videos.css"

// function Videos() {
//   const videosRef = useRef(null);
//   const prevBtnRef = useRef(null);
//   const nextBtnRef = useRef(null);

//   useEffect(() => {
//     const videosEl = videosRef.current;


//     const handlePrevClick = () => {
//       const videoWidth = videosEl.querySelector('video').offsetWidth;
//       const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
//       videosEl.scrollBy({
//           left: -(videoWidth + videoMargin),
//           behavior: 'smooth'
//       });
//   };
  
//   const handleNextClick = () => {
//       const videoWidth = videosEl.querySelector('video').offsetWidth;
//       const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
//       videosEl.scrollBy({
//           left: videoWidth + videoMargin,
//           behavior: 'smooth'
//       });
//   };
  

//     const prevBtn = prevBtnRef.current;
//     const nextBtn = nextBtnRef.current;

//     prevBtn.addEventListener('click', handlePrevClick);
//     nextBtn.addEventListener('click', handleNextClick);

//     return () => {
//     prevBtn.removeEventListener('click', handlePrevClick);
//     nextBtn.removeEventListener('click', handleNextClick);
//     };
//   }, []);

//   return (
//     <div className='portfolio'>
//       <h2>Event Videos</h2>
//      <div className="videos-container">
//        <button id="videoPrevBtn" className="nav-btn" ref={prevBtnRef}>&#10094;</button>

//     <div className="videos" ref={videosRef}>
//      <video width="320" height="240" controls>
//       <source src={event1Video} type="Video/mp4" />
//      </video>

//      <video width="320" height="240" controls>
//       <source src={event2Video} type="Video/mp4" />
//      </video>

//      <video width="320" height="240" controls>
//       <source src={event3Video} type="Video/mp4" />
//      </video>

//      <video width="320" height="240" controls>
//       <source src={event4Video} type="Video/mp4" />
//      </video>

//      <video width="320" height="240" controls>
//       <source src={event5Video} type="Video/mp4" />
//      </video>

//      <video width="320" height="240" controls>
//       <source src={event6Video} type="Video/mp4" />
//      </video>

//   </div>
//   <button id="videoNextBtn" className="nav-btn" ref={nextBtnRef}>&#10095;</button>

//   </div>

//   </div>
//   )
// }

// export default Videos;

import React, { useEffect, useRef, useState } from 'react';
import "../styles/Videos.css";

function Videos() {
    const videosRef = useRef(null);
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://192.168.0.104:5000/api/getVideos');
                const serverVideos = await response.json();
                setVideos(serverVideos.map(vid => `http://192.168.0.104:5000/video-uploads/${vid}`));
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };
        fetchVideos();
    }, []);

    useEffect(() => {
          const videosEl = videosRef.current;

          window.addEventListener('load', () => {
            setTimeout(() => {
                const videosEl = document.querySelector('.videos');
                videosEl.style.display = 'none';
                void videosEl.offsetHeight; // force reflow
                videosEl.style.display = '';
            }, 100);
        });
        
      
      
          const handlePrevClick = () => {
            const videoWidth = videosEl.querySelector('video').offsetWidth;
            const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
            videosEl.scrollBy({
                left: -(videoWidth + videoMargin),
                behavior: 'smooth'
            });
        };
        
        const handleNextClick = () => {
            const videoWidth = videosEl.querySelector('video').offsetWidth;
            const videoMargin = parseInt(window.getComputedStyle(videosEl.querySelector('video')).marginRight, 10);
            videosEl.scrollBy({
                left: videoWidth + videoMargin,
                behavior: 'smooth'
            });
        };
        
      
          const prevBtn = prevBtnRef.current;
          const nextBtn = nextBtnRef.current;
      
          prevBtn.addEventListener('click', handlePrevClick);
          nextBtn.addEventListener('click', handleNextClick);
      
          return () => {
          prevBtn.removeEventListener('click', handlePrevClick);
          nextBtn.removeEventListener('click', handleNextClick);
          };
        }, []);

        const handleVideoSelection = (videoSrc) => {
          if (selectedVideos.includes(videoSrc)) {
              setSelectedVideos(prev => prev.filter(vid => vid !== videoSrc));
          } else {
              setSelectedVideos(prev => [...prev, videoSrc]);
          }
      };
  
      const handleUpload = async (event) => {
          const file = event.target.files[0];
          if (file) {
              const formData = new FormData();
              formData.append('video', file);
              try {
                  const uploadResponse = await fetch("http://192.168.0.104:5000/api/uploadVideo", {
                      method: "POST",
                      body: formData,
                  });
                  if (uploadResponse.ok) {
                      window.location.reload();
                  } else {
                      console.error("Error uploading the video:", uploadResponse.statusText);
                  }
              } catch (error) {
                  console.error("Error uploading the video:", error);
              }
          }
      };
  
      const handleDeleteSelected = async () => {
          for (let videoSrc of selectedVideos) {
              if (videoSrc.startsWith('http://192.168.0.104:5000/video-uploads/')) {
                  const videoName = videoSrc.substring(videoSrc.lastIndexOf('/') + 1);
                  try {
                      const response = await fetch(`http://192.168.0.104:5000/api/deleteVideo/${videoName}`, {
                          method: 'DELETE'
                      });
                      if (response.ok) {
                          setVideos(prevVideos => prevVideos.filter(vid => vid !== videoSrc));
                      } else {
                          console.error("Failed to delete video");
                      }
                  } catch (error) {
                      console.error("Error deleting the video:", error);
                  }
              }
          }
          setSelectedVideos([]);
      };
  
      return (
          <div className='portfolio'>
              <h2>Event Videos</h2>
              <div className="videos-container">
                  <button id="videoPrevBtn" className="nav-btn" ref={prevBtnRef}>&#10094;</button>
  
                  <div className="videos" ref={videosRef}>
                      {videos.map((videoSrc, index) => (
                          <div key={index} className={`video-container ${selectedVideos.includes(videoSrc) ? 'selected' : ''}`} onClick={() => handleVideoSelection(videoSrc)}>
                              <video width="320" height="240" controls>
                                  <source src={videoSrc} type="video/mp4" />
                              </video>
                          </div>
                      ))}
                  </div>
  
                  <button id="videoNextBtn" className="nav-btn" ref={nextBtnRef}>&#10095;</button>
                  <input type="file" id="videoUpload" style={{ display: "none" }} onChange={handleUpload} />
                  <div className='video-button'>
                  <button onClick={() => document.getElementById('videoUpload').click()}>Upload Video</button>
                  <button onClick={handleDeleteSelected}>Delete Video</button>
               </div>
              </div>
          </div>
      );
  }
  
  export default Videos;
  