import { useCallback, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const LoginNew = () => {
    useTitle('Login');
    const { googleSignIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            const saveUser = { name: user.displayName, email: user.email, photo: user.photoURL }
                fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
            console.log(user);
            if (user.providerId) {
                navigate(from, { replace: true })
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error);
        })
    };

    // Particles
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    // Particles

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=1060&t=st=1692287315~exp=1692287915~hmac=cc1c7407d9a0c2226dcbf215af6c79a01382f45f78611c9415580e3ea17253e4)' }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 600,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#f8cf5f",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="max-w-md">
                    <div className="card p-8 flex-shrink-0 w-full max-w-md shadow-2xl bg-black">
                        <h1 className="font-bold text-2xl">Login Here</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#f8cf5f] font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@email.com" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-[#f8cf5f] ">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input text-black input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn login font-bold" value="Login" />
                            </div>
                        </form>
                        <div className="form-control text-center mx-auto">
                            <p><small>Don't have an Account? <Link to='/register' className="text-[#f8cf5f] font-bold">Register</Link></small></p>
                        </div>
                        <div className="divider before:bg-primary after:bg-secondary">OR</div>
                        <div className="form-control mt-3">
                            <button onClick={handleGoogleLogIn} className=" btn-primary btn ">
                                <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginNew;