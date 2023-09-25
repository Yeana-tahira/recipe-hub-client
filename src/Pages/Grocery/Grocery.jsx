import chaldal from '../../assets/chaldal.jpg';
import shawpno from '../../assets/shawpno.jpg';
import daraz from '../../assets/daraz.png';
import panda from '../../assets/panda.png';
import agora from '../../assets/agora.png';
import meena from '../../assets/meena.png';
import unimart from '../../assets/unimart.png';
import khulshi from '../../assets/khulshi.png';
import './Grocery.css';
import useTitle from '../../hooks/useTitle';

const Grocery = () => {
    useTitle('Grocery')
    return (
        <div className='p-5'>
            {/* banner */}
            <div className="hero p-7 mb-8" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/easter-background-with-eggs-rabbits-carrots-festive-spring-composition-with-traditional-symbols-modern-hard-light-dark-shadow-flat-lay-banner-format_164638-20284.jpg?w=1380)' }}>
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div className="hero-content text-white">
                    <div className="max-w-md">
                        <h1 className=" text-center text-5xl font-serif font-bold">Grocery <span className='text-base'>Fresh Choices, Every Day!</span></h1>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className='p-2 grid grid-cols-2 gap-8'>
                <div className='flex items-center justify-between px-8 py-2 box'>
                    <a className='font-bold text-lg' href="https://chaldal.com/" target="_blank">Chaldal</a>
                    <img className='w-20' src={chaldal} alt="" />
                </div>
                <div className='flex items-center justify-between px-8 box'>
                    <a className='font-bold text-lg' href="https://www.shwapno.com/" target="_blank">Shawpno</a>
                    <img className='w-20' src={shawpno} alt="" />
                </div>
            </div>
            <div className='p-2 grid grid-cols-2 gap-8'>
                <div className='flex items-center justify-between px-8 py-2 box'>
                    <a className='font-bold text-lg' href="https://www.daraz.com.bd/dmart/" target="_blank">Daraz Mart</a>
                    <img className='w-20' src={daraz} alt="" />
                </div>
                <div className='flex items-center justify-between px-8 box'>
                    <a className='font-bold text-lg' href="https://www.foodpanda.com.bd/darkstore/h9jp/pandamart-mirpur?gclid=CjwKCAjwrranBhAEEiwAzbhNtX1VWUbZwJ4TSdqqSofmsjBHP7SglxuEP6e-gtLXgcbXHZTzA0F9yBoC2m4QAvD_BwE" target="_blank">Panda Mart</a>
                    <img className='w-24' src={panda} alt="" />
                </div>
            </div>
            <div className='p-2 grid grid-cols-2 gap-8'>
                <div className='flex items-center justify-between px-8 py-3 box'>
                    <a className='font-bold text-lg' href="https://agorasuperstores.com/" target="_blank">Agora</a>
                    <img className='w-20' src={agora} alt="" />
                </div>
                <div className='flex items-center justify-between px-8 box'>
                    <a className='font-bold text-lg' href="https://meenabazaronline.com/" target="_blank">Meena Bazar</a>
                    <img className='w-24' src={meena} alt="" />
                </div>
            </div>
            <div className='p-2 grid grid-cols-2 gap-8'>
                <div className='flex items-center justify-between px-8 py-3 box'>
                    <a className='font-bold text-lg' href="https://www.unimart.online/" target="_blank">Unimart</a>
                    <img className='w-28' src={unimart} alt="" />
                </div>
                <div className='flex items-center justify-between px-8 box'>
                    <a className='font-bold text-lg' href="https://www.khulshimart.com/" target="_blank">Khulshi Mart</a>
                    <img className='w-24' src={khulshi} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Grocery;