import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    };

    return (
        <div className="w-full max-w-xs md:max-w-md lg:max-w-xl flex flex-col gap-y-3 rounded-md overflow-hidden md:flex-row">
            <input 
                type="text" 
                name="text" 
                id="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                placeholder="Search for a movie, tv show, person..."
                autoComplete="off"
                className="w-full h-12 lg:h-14 px-3 md:px-4 focus:outline-none rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-br-none shadow-sm"
            />
            <button
                aria-label="search"
                className="w-full h-12 lg:h-14 bg-primary text-white font-primary font-semibold text-lg rounded-tl-md rounded-tr-md md:rounded-tl-none md:rounded-tr-none md:max-w-max md:px-4 lg:px-5 shadow-sm hover:bg-primary-hover"
                onClick={() => navigate(`/search/${query}`)}
            >
                Search
            </button>
        </div>
    )
}

export default SearchForm