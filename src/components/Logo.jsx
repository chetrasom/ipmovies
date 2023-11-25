import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeMenuBox, closeSearchBox } from "../features/toggle/toggleSlice"

const Logo = () => {
    const dispatch = useDispatch();

    const closeAll = () => {
        dispatch(closeMenuBox());
        dispatch(closeSearchBox());
    };

    return (
        <Link 
            to='/' 
            className="font-primary font-bold text-white text-2xl md:text-3xl"
            onClick={closeAll}
        >
            <span className="text-primary">IP</span> Movies
        </Link>
    )
}

export default Logo