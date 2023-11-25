import { useState, useEffect } from 'react';
import { Logo, SearchBox } from '../components';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openSearchBox, closeSearchBox, openMenuBox } from '../features/toggle/toggleSlice';
import { selectorToggle } from '../features/toggle/toggleSlice';

const Header = () => {
    const dispatch = useDispatch();
    const { isSearchBox } = useSelector(selectorToggle);
    // # scroll change background
    const [show, setShow] = useState("backdrop-blur-sm");
    const [lastScrollY, setLastScrollY] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow("invisible -translate-y-full")
            } else {
                setShow("visible translate-y-0")
            }
        } else {
            setShow("backdrop-blur-sm")
        }
        setLastScrollY(window.scrollY);
    };

    // Auto scroll to top when link or navigate page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Scroll Effect
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        }
    }, [controlNavbar, lastScrollY]);


    const navigationHandler = (type) => {
        if (type === 'movie') {
            navigate('/explore/movie')
        } else {
            navigate('/explore/tv')
        }
        dispatch(closeSearchBox())
    };

    return (
        <header className={`${show} bg-black/20 fixed top-0 left-0 w-full z-20 py-5 transition-all ease-linear duration-300`}>
            <div className="container">
                <div className='flex items-center justify-between gap-x-8'>
                    <Logo />

                    <nav className='hidden md:block md:ml-auto'>
                        <ul className='flex items-center gap-x-5'>
                            <li className='font-bold text-white text-lg tracking-wide'>
                                <NavLink
                                    onClick={() => navigationHandler('movie')}
                                    to="/explore/movie"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-primary" : ""
                                    }
                                >
                                    Movies
                                </NavLink>
                            </li>
                            
                            <li className='font-bold text-white text-lg tracking-wide'>
                                <NavLink
                                    onClick={() => navigationHandler('tv')}
                                    to="/explore/tv"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-primary" : ""
                                    }
                                >
                                    TV Shows
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex gap-x-5 md:gap-x-8'>
                        {isSearchBox ? (
                            <button 
                                aria-label='search'
                                className='text-xl text-primary'
                                onClick={() => dispatch(closeSearchBox())}
                            >
                                <FaTimes />
                            </button>
                        ) : (
                            
                            <button 
                                aria-label='search'
                                className='text-lg text-white'
                                onClick={() => dispatch(openSearchBox())}
                            >
                                <FaSearch />
                            </button>
                        )}
                        

                        <button 
                            aria-label='menu bar'
                            className='md:hidden text-xl text-white'
                            onClick={() => dispatch(openMenuBox())}
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>

            <SearchBox />

        </header>
    )
}

export default Header;