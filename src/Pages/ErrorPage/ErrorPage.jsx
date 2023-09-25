import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg';
const ErrorPage = () => {
    return (
        <div className="grid items-center my-11 mx-3 lg:mx-48 justify-center ">
            <div>
                <img src={error} alt="Error" className='animate__animated animate__flash mx-auto w-96'/>
            </div>
            <div className='text-center'>
                <h1 className="font-bold text-5xl"><span>Oops!</span> It's a dead end...</h1>
                <p className="mt-3">The page you are looking for might have been moved, renamed, or might never existed</p>
                <Link to="/"><button className='mt-4 btn login'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;