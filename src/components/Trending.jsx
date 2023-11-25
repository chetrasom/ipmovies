import { useState } from 'react';
import { SwitchTabs, Carousel } from '../components';
import useFetch from '../hooks/useFetch';

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data:trending, loading } = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    };

    return (
        <section className="py-[40px] md:py-[50px] lg:py-[60px]">
            <div className="container">
                <div className='flex items-center justify-between mb-8 md:mb-10 lg:mb-12'>
                    <h2 className="h2 text-white tracking-wider">Trending</h2>
                    <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
                </div>
                <Carousel data={trending?.results} loading={loading} />
            </div>
        </section>
    )
}

export default Trending