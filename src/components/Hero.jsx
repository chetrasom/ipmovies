import { useEffect, useState } from 'react';
import { SearchForm, LazyLoadImg } from '../components';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';
import { selectorHome } from '../features/home/homeSlice';

const Hero = () => {
    const { url } = useSelector(selectorHome);
    const [background, setBackground] = useState("");

    const { data, loading } = useFetch("/movie/upcoming");
    
    // NOTE: To build an image URL, we need 3 pieces of data: base_url, size(optional), file_path
    useEffect(() => {
        const backdrop_baseURL = url?.backdrop; // base_url from Configuration
        const backdrop_filePath = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path; // Random index file_path

        const bg = backdrop_baseURL + backdrop_filePath;
        setBackground(bg);
    }, [data?.results, url?.backdrop]);

    return (
        <section className="relative h-[80vh] lg:h-[90vh] overflow-hidden">
            {!loading && (
                <div className='relative w-full h-full'>
                    <div className='absolute inset-0 z-10 opacity-20 bg-heroGradient'></div>
                    <LazyLoadImg src={background} className={'w-full h-full object-cover'} />
                </div>
            )}
            
            <div className='container absolute top-[50%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%] p-4'>
                <div className="flex flex-col items-center justify-center">
                    <h1 className='h1 text-center text-white drop-shadow-md mb-3 md:mb-4'>
                        Welcome to <span className='text-primary'>IP</span> movies.
                    </h1>
                    <h3 className='h3 text-center text-white drop-shadow-md mb-5 md:mb-6'>
                        Unlimited movies, TV shows and people to discover. Explore now.
                    </h3>
                    <SearchForm />
                </div>
            </div>
        </section>
    )
}

export default Hero;