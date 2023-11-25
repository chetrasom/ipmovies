import React from 'react';
import { useSelector } from 'react-redux';
import { selectorHome } from '../features/home/homeSlice';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { LazyLoadImg, CircleRating, Genres } from '../components';
import dayjs from 'dayjs';
import PosterFallback from '../assets/images/no-poster.png';

const MovieCardSearch = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector(selectorHome);
    const navigate = useNavigate();

    const posterUrl = data?.poster_path ? url?.poster + data?.poster_path : PosterFallback;

    return (
        <div onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}>
            <figure className='relative h-[235px] md:h-[215px] lg:h-[275px] rounded-md shadow-md'>
                <LazyLoadImg src={posterUrl} className={'w-full h-full object-center rounded-md overflow-hidden'} />

                {!fromSearch && (
                    <React.Fragment>
                        <div className='absolute -bottom-4 left-2 z-10'>
                            <CircleRating rating={data?.vote_average?.toFixed(1)} />
                        </div>

                        <div className='max-w-[66%] w-full absolute bottom-4 right-1.5 z-10'>
                            <Genres data={data?.genre_ids} alignPosition={'items-end justify-end'} />
                        </div>
                    </React.Fragment>
                )}
                
            </figure>
            
            <div className='font-primary pt-6 px-3'>
                <h4 className='text-white tracking-wider'>{data?.title || data?.name }</h4>
                <span className='text-gray-500 text-[15px]'>
                    {dayjs(data?.release_date || data?.first_air_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    )
}

export default MovieCardSearch;

MovieCardSearch.propTypes = {
    data: PropTypes.any,
    fromSearch: PropTypes.any,
    mediaType: PropTypes.any,
}