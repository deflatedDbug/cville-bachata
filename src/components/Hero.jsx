import styles from '../style'
import React, { useEffect } from 'react';
import heroVideo from '../assets/hero-video.mp4';
import HeroButton from './HeroButton';

const Hero = () => {

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY <= 0) {
                window.scrollTo(0, 0);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <section id="home" className={`flex md:flex-row flex-col pt-5000 ${styles.paddingY}`} style={{ paddingTop: '160px' }}>
            <div className="flex flex-row justify-between items-start w-full">
                <div>
                    <h1 style={{ marginLeft: '45px', animation: 'slideUp 2s ease forwards' }} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        This is <br />
                        <span className="text-gradient">
                            C'ville Bachata Social <br className="sm:block hidden" />

                            <br className="sm:block hidden" />
                        </span> {" "}
                        Music & Dancing
                    </h1>

                    <div className='flex justify-between items-start'>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-12 opacity-0`} style={{ animation: 'slideUp 2s ease forwards', animationDelay: '1s' }}> We are welcoming everyone out for some fun, new experiences. <br /> <br />Our goal is to help people in Charlottesville, Virginia dance the night away, while simultaneously learning about Salsa/Bachata music and dancing.
                        </p>                   
                            <HeroButton />
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative flex-shrink-0 w-1/3 ml-4">
                    <div className="absolute z-10 w-[40%] h-[35%] top-50% left-50% transform -translate-x-50% -translate-y-50% pink__gradient" />
                    <div className="absolute z-20 w-[80%] h-[80%] top-50% left-50% transform -translate-x-50% -translate-y-50% rounded-full white__gradient" />
                    <div className="absolute z-10 w-[50%] h-[50%] top-50% left-50% transform -translate-x-50% -translate-y-50% blue__gradient" />

                    <video className="w-full max-w-[45%] h-[520px] object-cover z-30 rounded-lg" autoPlay loop muted playsInline style={{ animation: 'fadeIn 2.1s ease forwards' }}>
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    )
}
export default Hero;
