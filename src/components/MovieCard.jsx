import PropTypes from 'prop-types';
import { LazyLoadImg, CircleRating, Genres } from '../components';
import dayjs from 'dayjs';

const MovieCard = ({ posterUrl, item }) => {
    return (
        <>
            <figure className='relative h-[235px] md:h-[215px] lg:h-[275px] rounded-md shadow-md'>
                <LazyLoadImg src={posterUrl} className={'w-full h-full object-center rounded-md overflow-hidden'} />

                <div className='absolute -bottom-4 left-2 z-10'>
                    <CircleRating rating={item?.vote_average?.toFixed(1)} />
                </div>

                {/* className='max-w-[65%] w-full absolute bottom-4 right-2 z-10' */}
                <div className='max-w-[66%] w-full absolute bottom-4 right-1.5 z-10'>
                    <Genres data={item?.genre_ids} alignPosition={'items-end justify-end'} />
                </div>

            </figure>
            
            <div className='font-primary pt-8 px-3'>
                <h4 className='text-white tracking-wider'>{item?.title || item?.name }</h4>
                <span className='text-gray-500 text-[15px]'>
                    {dayjs(item?.release_date || item?.first_air_date).format("MMM D, YYYY")}
                </span>
            </div>
        </>
    )
}

export default MovieCard;

MovieCard.propTypes = {
    posterUrl: PropTypes.string,
    item: PropTypes.any
}