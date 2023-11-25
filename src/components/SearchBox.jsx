import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectorToggle, closeSearchBox } from '../features/toggle/toggleSlice';

const SearchBox = () => {
    const [querySearch, setQuerySearch] = useState("");
    const { isSearchBox } = useSelector(selectorToggle);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && querySearch.length > 0) {
            navigate(`/search/${querySearch}`)
            setTimeout(() => {
                dispatch(closeSearchBox())
            }, 1000);
            setQuerySearch("")
        }
    };
    return (
        <div className={`${isSearchBox ? "top-full opacity-100" : "-top-full opacity-0"} bg-white absolute left-0 right-0 z-30 w-full transition-all ease-in-out duration-300`}>
            <div>
                <div className='container flex items-center gap-3 h-12 md:h-14'>
                    <button
                        aria-label="search"
                        className='text-base-content h-full'
                    >
                        <FaSearch />
                    </button>
                    <input 
                        type="text" 
                        name="text" 
                        id="text"
                        placeholder="Search"
                        className="w-full h-full focus:outline-none"
                        autoComplete='off'
                        value={querySearch}
                        onChange={(e) => setQuerySearch(e.target.value)}
                        onKeyUp={searchQueryHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBox