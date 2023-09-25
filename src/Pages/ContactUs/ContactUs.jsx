import React from 'react';
import Tahira from '../../assets/Tahira.jpg';
import vid from '../../assets/vid.mp4';
import useTitle from '../../hooks/useTitle';

const ContactUs = () => {
    useTitle('Contact Us');
    return (
        <div className='hero' style={{backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-food-ingredients-with-notebook-pumpkin_23-2148834716.jpg?w=360&t=st=1693063365~exp=1693063965~hmac=5aa9e766172cc0a39a3a69d8bdccbdfe8927e323a708c24ebc717b8948943650)'}}>
            {/* <video src={vid} autoPlay loop muted /> */}
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content lg:px-24 gap-20 flex-col ">
                <div className="text-white text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold">Get In Touch!</h1>
                    <p className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" /><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z" /><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" /><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" /><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" /></svg> Email:<span className=''>tahiratabassumyeana1@gmail.com</span></p>

                    <p className='flex items-center gap-2 -ml-2 mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><path fill="#546E7A" d="M12 40V10h20c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z" /><path fill="#4FC3F7" d="M32 13H16c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z" /><path fill="#B3E5FC" d="M19 30h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z" /><path fill="#37474F" d="M16 10h-4V4c0-1.1.9-2 2-2s2 .9 2 2v6z" /></svg>Mobile: +880 1776-111024</p>

                    <p className='flex gap-2 mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M8.75 10a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Z" /><path fill="red" fill-rule="evenodd" d="M3.774 8.877a8.038 8.038 0 0 1 8.01-7.377h.432a8.038 8.038 0 0 1 8.01 7.377a8.693 8.693 0 0 1-1.933 6.217L13.5 20.956a1.937 1.937 0 0 1-3 0l-4.792-5.862a8.693 8.693 0 0 1-1.934-6.217ZM12 5.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5Z" clip-rule="evenodd" /></svg>Locaion: Daffodil Smart City, Birulia, Ashulia</p>
                </div>
                <div>
                    <form /* onSubmit={sendMessage} */>
                        <div className='lg:flex gap-12'>
                            <div className='grid'>
                                <input type="text" placeholder="Your Name*" className="input mb-6" />
                                <input type="email" placeholder="Your Email*" className="input mb-6" />
                                <input type="text" placeholder="Your Phone*" className="input mb-6 lg:mb-0" />
                            </div>
                            <div>
                                <textarea className="textarea w-full" name="description" placeholder='Share Your Message...' id="" cols="40" rows="7"></textarea>
                            </div>
                        </div>
                        <div>
                        <input type="submit" className="btn flex mt-8 mx-auto  font-serif text-lg login" value="Send Message" />
                        </div>
                    </form>
                </div>
                {/* CEO */}
            <div className="hero lg:px-20 ">
                <div className="hero-content text-white flex-col gap-32 lg:flex-row-reverse">
                    <img src={Tahira} className="animate__animated animate__slideInDown max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-mono">Tahira Tabassum Yeana</h1>
                        <p className="pb-4 font-bold">CEO, Recipe Hub</p>
                        <p className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z" /><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z" /><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" /><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z" /><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z" /></svg> Email: tahiratabassumyeana1@gmail.com</p>

                        <p className='flex gap-2 -ml-2 mt-1'><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><path fill="#546E7A" d="M12 40V10h20c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z" /><path fill="#4FC3F7" d="M32 13H16c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z" /><path fill="#B3E5FC" d="M19 30h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z" /><path fill="#37474F" d="M16 10h-4V4c0-1.1.9-2 2-2s2 .9 2 2v6z" /></svg>Mobile: +880 1776-111024</p>

                        <button className="btn btn-outline text-white mt-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" /></svg>Follow on Facebook</button>
                    </div>
                </div>
            </div>
            {/* CEO */}

            <div className='lg:px-44 px-10 mt-16 mb-10 text-white'>
                <h1 className='font-bold text-4xl uppercase font-mono mb-3'>Our Vision</h1>
                <p className='text-justify lg:ml-20 ml-7 font-serif font-bold'>
                    "Empowering Culinary Connections: Our vision is to create a vibrant online platform where food enthusiasts from around the world come together to share, explore, and celebrate the diverse tapestry of flavors that enrich our lives. Through a seamless blend of innovation and tradition, we aspire to foster a global community that connects through the joy of cooking, elevating the way we experience and savor food. By nurturing a space where creativity flourishes and culinary wisdom is exchanged, we aim to inspire a deeper appreciation for cultural heritage, nurture healthy lifestyles, and spread the love for creating and sharing exceptional recipes that touch the heart and tantalize the taste buds."
                </p>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;