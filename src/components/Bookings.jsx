import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';


const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  );
}


const Bookings = () => {
  return (
    <section id="private bookings" className={layout.section}>
      <div className={`${layout.sectionInfo} ml-12 mb-[5%]`}>
        <h2 className={styles.heading2}>
          Private Bookings <br />
          Your Event, Our DJ Magic!
        </h2>
        <p className={`${styles.paragraph} pt-6`}>
        Experience the ultimate in DJ entertainment for your private events. <br /> <br />

        No matter the occasion, our dedicated DJs are here to provide exceptional musical experiences that leave a lasting impression. <br /> <br />
        
        Book us today and let the music speak for itself.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </section>
  )
}

export default Bookings