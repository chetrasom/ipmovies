import Logo from "./Logo";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { selectorToggle } from "../features/toggle/toggleSlice"
import { closeMenuBox } from "../features/toggle/toggleSlice";

const SidebarMenu = () => {
    const dispatch = useDispatch();
    const { isMenuBox } = useSelector(selectorToggle);
    const navigate = useNavigate();

    const closeMenuSidebar = () => {
        dispatch(closeMenuBox())
    };

    const navigationHandler = (type) => {
        if (type === 'movie') {
            navigate('/explore/movie')
        } else {
            navigate('/explore/tv')
        }
        dispatch(closeMenuBox())
    };

    return (
        <div className={`${isMenuBox ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"} bg-white/30 fixed inset-0 z-30 transition-all ease-linear duration-300`}>
            <div className={`${isMenuBox ? "right-0" : "-right-full"} bg-base text-white absolute top-0 z-20 max-w-[300px] w-full h-full p-5 transition-all ease-linear duration-300`}>
                <div className="flex items-center justify-between">
                    <Logo />
                    <button 
                        aria-label="close menu"
                        className="text-2xl text-primary"
                        onClick={closeMenuSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>

                <nav className="mt-10">
                    <ul className="font-semibold font-secondary text-white space-y-4">
                        <li onClick={() => navigationHandler('movie')}>Movies</li>
                        <li onClick={() => navigationHandler('tv')}>TV Shows</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SidebarMenu