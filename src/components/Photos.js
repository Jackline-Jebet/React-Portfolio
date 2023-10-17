import React, { forwardRef } from 'react';
// import Pic56 from '../assets/images/pic56.webp';
// import Pic45 from '../assets/images/pic45.webp';
// import Pic48 from '../assets/images/pic48.webp';
// import Pic27 from '../assets/images/pic27.jpg';
// import Pic8 from '../assets/images/pic8.jpg';
// import DSC_0060 from '../assets/images/DSC_0060.JPG';
// import Pic51 from '../assets/images/pic51.webp';
// import Pic34 from '../assets/images/pic34.jpg';
// import Pic28 from '../assets/images/pic28.jpg';
// import Pic57 from '../assets/images/pic57.webp';
// import Pic33 from '../assets/images/pic33.jpg';
// import IMG_20230823_WA0019 from '../assets/images/IMG-20230823-WA0019.jpg';
// import IMG_20220314_WA0134 from '../assets/images/IMG-20220314-WA0134.jpg';
// import Pic58 from '../assets/images/pic58.webp';
// import Pic62 from '../assets/images/pic62.webp';
// import Pic59 from '../assets/images/pic59.webp';
// import DSC_5314 from '../assets/images/DSC_5314.JPG';
// import Pic22 from '../assets/images/pic22.JPG';
// import Pic26 from '../assets/images/pic26.JPG';
// import Pic60 from '../assets/images/pic60.webp';
// import PSX_2590 from '../assets/images/PSX_2590.jpg';
// import PSX_2762 from '../assets/images/PSX_2762.jpg';
// import IMG_20230823_WA0015 from '../assets/images/IMG-20230823-WA0015.jpg';
// import IMG_2510_1 from '../assets/images/IMG_2510-1.jpg';
// import Pic20 from '../assets/images/pic20.JPG';


const Photos = forwardRef((props, ref) => {
  // const images = [
  //     {src: Pic56, source: 'local'},
  //     {src: Pic45, source: 'local'},
  //     {src: Pic48, source: 'local'},
  //     {src: Pic27, source: 'local'},
  //     {src: Pic8, source: 'local'},
  //     {src: DSC_0060, source: 'local'},
  //     {src: Pic51, source: 'local'},
  //     {src: Pic34, source: 'local'},
  //     {src: Pic28, source: 'local'},
  //     {src: Pic57, source: 'local'},
  //     {src: Pic33, source: 'local'},
  //     {src: IMG_20230823_WA0019, source: 'local'},
  //     {src: IMG_20220314_WA0134, source: 'local'},
  //     {src: Pic58, source: 'local'},
  //     {src: Pic62, source: 'local'},
  //     {src: Pic59, source: 'local'},
  //     {src: DSC_5314, source: 'local'},
  //     {src: Pic22, source: 'local'},
  //     {src: Pic26, source: 'local'},
  //     {src: Pic60, source: 'local'},
  //     {src: PSX_2590, source: 'local'},
  //     {src: PSX_2762, source: 'local'},
  //     {src: IMG_20230823_WA0015, source: 'local'},
  //     {src: IMG_2510_1, source: 'local'},
  //     {src: Pic20, source: 'local'}
  
  // ];
  

//   const handleDelete = async (imageIndex) => {
//     const image = images[imageIndex];
//     if(image.source === 'local') {
//       const updatedImages = [...images];
//       updatedImages.splice(imageIndex, 1);
//       props.onUpdate && props.onUpdate(updatedImages);
//       return;
//     }
    
//     const imageName = image.src.substring(image.src.lastIndexOf('/') + 1);

//     try {
//         const response =  fetch(`http://localhost:5000/api/delete/${imageName}`, {
//             method: 'DELETE'
//         });
//         if (response.ok) {
//             images.splice(imageIndex, 1);
//             props.onUpdate && props.onUpdate();
//         } else {
//             throw new Error('Failed to delete photo');
//         }
//     } catch (error) {
//         console.error("Error deleting the photo:", error);
//     }
// };

    return (
        <div className='photos' ref={ref}>
            {props.images.map((imgSrc, index) => (
                <div key={index} className={`photo-container ${props.selectedImages.includes(imgSrc) ? 'selected' : ''}`} onClick={() => props.onToggleSelect(imgSrc)}>
                    <img src={imgSrc} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
        </div>
    );
});

export default Photos;


    //       <div key={index} className="photo-container">
    //           <img src={image.source === 'local' ? image.src : `http://localhost:5000${image.src}`} alt={`Gallery ${index + 1}`} />
    //           <button onClick={() => handleDelete(index)}>Delete</button>
    //       </div>
    //   ))}
//   </div>
// );
// }); 
