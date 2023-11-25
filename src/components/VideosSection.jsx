import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoPlayCircleOutline } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { VideoPopup, SkeletonVideo } from '../components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState();

    return (
        <div>
            <h3 className="text-2xl text-white font-bold mb-4">Official Videos</h3>
            {!loading ? (
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {data?.results?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div 
                                    className='bg-lime-200 relative rounded-lg overflow-hidden'
                                    onClick={() => {
                                        setVideoId(item.key)
                                        setShow(true)
                                    }}
                                >
                                    <LazyLoadImage 
                                        src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} 
                                        className='w-full h-full object-contain'
                                    />
                                    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-40 hover:rotate-[125deg] transition-all duration-200'>
                                        <IoPlayCircleOutline className='text-6xl text-white hover:text-primary duration-100' />
                                    </div>
                                </div>
                                <div className='font-primary text-center mt-2'>
                                    <h4 className='text-gray-200 tracking-wider'>{item?.name}</h4>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            ) : (
                <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5'>
                    <div><SkeletonVideo /></div>
                    <div><SkeletonVideo /></div>
                    <div className='hidden md:block'><SkeletonVideo /></div>
                    <div className='hidden md:block'><SkeletonVideo /></div>
                    <div className='hidden lg:block'><SkeletonVideo /></div>
                </div>
                
            )}

            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />

        </div>
    )
}

export default VideosSection;

VideosSection.propTypes = {
    data: PropTypes.any,
    loading: PropTypes.any
}