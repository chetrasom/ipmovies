import { useSelector } from 'react-redux';
import { selectorHome } from '../features/home/homeSlice';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "../style/customSwiper.css";
// import required modules
import { Navigation } from 'swiper/modules';

import { MovieCard, SkeletonLoading } from '../components';
import PosterFallback from '../assets/images/no-poster.png';


const Carousel = ({ data, loading, endpoint, title }) => {
    const { url } = useSelector(selectorHome);
    const navigate = useNavigate();

    return (
        <section>
            {title && <h3 className="capitalize text-2xl text-white font-bold mb-4">{title}</h3>}
            <div>
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
                        navigation={true} 
                        modules={[Navigation]}
                    >
                        {data?.map((item) => {
                            const posterUrl = item?.poster_path 
                            ? url.poster + item.poster_path
                            : PosterFallback;

                            return (
                                <SwiperSlide 
                                    key={item?.id} 
                                    onClick={() => navigate(`/${item?.media_type || endpoint}/${item?.id}`)}
                                >
                                    <MovieCard 
                                        posterUrl={posterUrl}
                                        item={item}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                ) : (
                    <SkeletonLoading />
                )}
                
            </div>
        </section>
    )
}

export default Carousel;

Carousel.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.any,
    endpoint: PropTypes.any,
    title: PropTypes.any
}