import logo from '../../assets/logo.png';
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navItem = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/recipes'>All Recipe</ActiveLink></li>
        <li><ActiveLink to='/addRecipe'>Share Recipe</ActiveLink></li>
        <li><ActiveLink to='/recipeBooks'>Recipe Books</ActiveLink></li>
        <div className="dropdown mt-2 dropdown-hover">
            <label tabIndex={0} className="mx-2">Services</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu bg-black p-2 shadow rounded-box w-52">
            <li><ActiveLink to='/homemade'>Homemade Food Sellers</ActiveLink></li>
                    <li><ActiveLink to='/grocery'>Grocery</ActiveLink></li>
            </ul>
        </div>
        <li><ActiveLink to='/contact'>Contact Us</ActiveLink></li>
    </>;
    return (
        <div className="navbar text-white font-semibold lg:px-24 bg-black">
            <div className="navbar-start nav">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='animate__animated animate__fadeInLeft w-20 lg:w-24 mask mask-squircle'><img className='' src={logo} alt="" /></div>
                    <div>
                        <ActiveLink to='/' className=" font-bold px-0 normal-case text-base lg:text-xl">Recipe<span className='text-[#f8cf5f] lg:text-2xl font-extrabold'>HUB</span></ActiveLink>
                        <p className='py-0 my-0 text-base-200 lg:text-xs text-xs'><small>Recipe Recommendation <br></br>& Sharing Platform</small></p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:ml-3 lg:flex nav">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        <div className=" mr-3 tooltip-bottom tooltip mx-1 px-0 " data-tip={user?.displayName}>
                            <Link to='/profile'><img className='rounded-full w-12 h-12' src={user.photoURL} /></Link>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-xs login font-bold lg:btn-md">LogOut</button>
                    </>
                    : <Link to='/login' className="btn btn-xs login font-bold lg:btn-md">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;