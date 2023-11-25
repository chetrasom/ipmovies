import { useState } from 'react';
import { SwitchTabs, Carousel } from '../components';
import useFetch from '../hooks/useFetch';

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data:topRated, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    };

    return (
        <section className="pb-[40px] md:pb-[50px] lg:pb-[60px]">
            <div className="container">
                <div className='flex items-center justify-between mb-8 md:mb-10 lg:mb-12'>
                    <h2 className="h2 text-white tracking-wider">Top Rated</h2>
                    <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
                </div>
                <Carousel 
                    data={topRated?.results}
                    loading={loading} 
                    endpoint={endpoint}
                />
            </div>
        </section>
    )
}

export default TopRated