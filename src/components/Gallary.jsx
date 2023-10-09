import React, { useState, useEffect } from 'react';
import styles from '../style';

const Gallary = ({ images }) => {
  // Flatten all images into a single array
  const allImages = images.flatMap(rowObj => rowObj.rowImages);
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 3));  // Start with the first 3 images
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => {
        const newVisibleImages = [...visibleImages];
        newVisibleImages.shift();  // Remove the first image
        const nextImageIndex = allImages.indexOf(newVisibleImages[newVisibleImages.length - 1]) + 1;
        newVisibleImages.push(allImages[nextImageIndex % allImages.length]);
        setVisibleImages(newVisibleImages);
        setTimeout(() => {
          setTransitioning(false);  // Start fade-in after updating visible images
        }, 150);  // A short delay before starting fade-in, can be adjusted
      }, 800);  // Fade out duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [visibleImages, allImages]);


  return (
    <section id="gallery">
      <h2 className={`${styles.heading2} ml-12`}>Gallery</h2>
      <div className='bg-black p-8'>
        <div className='flex justify-between mb-8'>
          {visibleImages.map((imgSrc, imgIndex) => (
            <img
              key={imgIndex}
              src={imgSrc}
              alt="Gallary Image"
              className={`w-[32%] rounded-md border border-gray-700 transition-all duration-1000 ${transitioning ? 'opacity-0' : 'opacity-100'}`}

            />
          ))}
        </div>
      </div>
    </section>

  )
}

export default Gallary;
