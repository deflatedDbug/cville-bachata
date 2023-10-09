import React from 'react';
import { socialMedia } from '../constants';
import styles from '../style';

const Contact = () => {
    return (
        <section id="contact">
            <h2 className={`${styles.heading2} ml-12 mb-[2.5rem]`}>Contact</h2>
            <p className={`${styles.paragraph} ml-12`}>
                If you’re interested in more information, <br />
                please feel free to send an email or call
            </p>
            <footer className="w-full p-5 pr-[12rem] pt-[6.5rem] bg-black text-white">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    {/* Contact Info */}
                    <div className="contact-info space-y-2 mb-4 sm:mb-0">
                        <p className="text-lg ml-8 sm:ml-0">
                            Email: <a href="mailto:Cvillebachatasocial@gmail.com" className={`${styles.paragraph} hover:underline`}>Cvillebachatasocial@gmail.com</a>
                        </p>
                        <p className="text-lg ml-8 sm:ml-0">
                            Phone: <a href="tel:4344222571 " className={`${styles.paragraph} hover:underline`}>434-422-2571</a>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="social-icons flex space-x-4 sm:space-x-8 items-center mt-2 sm:mt-0 ml-8">
                        {socialMedia.map((social) => (
                            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                <img src={social.icon} alt={social.id} className="w-6 h-6 sm:w-8 sm:h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contact;
