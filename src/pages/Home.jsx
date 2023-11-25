import { useEffect } from "react"
import { fetchDataFromAPI } from "../utils/api"
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from '../features/home/homeSlice';
import { Hero, Trending, Popular, TopRated } from '../components';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchApiConfig();
        genresCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Configuration to build images - base_url
    const fetchApiConfig = () => {
        fetchDataFromAPI("/configuration").then((res) => {
            
            const url = {
                backdrop: res?.images?.secure_base_url + "original",
                poster: res?.images?.secure_base_url + "original",
                profile: res?.images?.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };

    // Genres
    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        // FetchDataFromAPI by genres
        endPoints.forEach((url) => {
            promises.push(fetchDataFromAPI(`/genre/${url}/list`));
        });
        
        // console.log(promises); [ Promise, Promise]
        const data = await Promise.all(promises);

        // console.log(data);
        
        data.map(({ genres }) => {
            return genres?.map((item) => (allGenres[item?.id] = item));
        });

        dispatch(getGenres(allGenres));
    };

    return (
        <>
            <Hero />
            <Trending />
            <Popular />
            <TopRated />
        </>
    )
}

export default Home