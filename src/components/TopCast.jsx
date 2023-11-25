import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectorHome } from '../features/home/homeSlice';
import { LazyLoadImg, SkeletonCasting } from '../components';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Avatar from '../assets/images/avatar.png';

const TopCast = ({ data, loading }) => {
    const { url } = useSelector(selectorHome);

    return (
        <div>
            <h3 className="text-2xl text-white font-bold mb-4">Top Cast</h3>
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
                            slidesPerView: 6,
                            spaceBetween: 16,
                        },
                    }}
                >
                    {data?.map((item) => {
                        let imgUrl = item?.profile_path ? url.profile + item?.profile_path : Avatar;
                    
                        return (
                            <SwiperSlide key={item.id}>
                                <div className='h-[200px] rounded-lg overflow-hidden'>
                                    <LazyLoadImg src={imgUrl} />
                                </div>
                                <div className='font-primary text-center mt-2'>
                                    <h4 className='text-gray-200 tracking-wider'>{item?.name}</h4>
                                    <h5 className='text-gray-400'>{item?.character}</h5>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            ) : (
                <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6'>
                    <div><SkeletonCasting/></div> 
                    <div><SkeletonCasting/></div>
                    <div className='hidden md:block'><SkeletonCasting/></div>
                    <div className='hidden md:block'><SkeletonCasting/></div>
                    <div className='hidden lg:block'><SkeletonCasting/></div>
                    <div className='hidden lg:block'><SkeletonCasting/></div>
                </div>
            )}
        </div>
    )
}

export default TopCast;

TopCast.propTypes = {
    data: PropTypes.any,
    loading: PropTypes.any
}