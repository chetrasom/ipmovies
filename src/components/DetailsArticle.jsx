import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import PosterFallback from '../assets/images/no-poster.png';
import { IoPlayCircleOutline } from "react-icons/io5";
import { LazyLoadImg, Genres, CircleRating } from '../components';
import { toHoursAndMinutes } from '../utils/helper';

const DetailsArticle = ({ poster, data, singleGenres, director, writer, setShow, setVideoId, video }) => {
    return (
        <div className="container flex flex-col gap-5 md:flex-row lg:gap-10">
            <figure className='h-auto md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden'>
                {data?.poster_path ? (
                    <LazyLoadImg src={poster} />
                ) : (
                    <LazyLoadImg src={PosterFallback} />
                )}
            </figure>

            <div className='md:flex-1'>

                {/* Title */}
                <h3 className='h2 text-white drop-shadow-sm pb-3 md:pb-1 lg:pb-3'>
                    {data?.name || data?.title} ({ dayjs(data?.release_date).format("YYYY") })
                </h3>
                
                {/* Subtitle tagline */}
                <div className='text-stone-300 drop-shadow-sm pb-4 md:pb-1 lg:pb-3'>
                    <h4>{data?.tagline}</h4>
                </div>

                {/* Genres */}
                <div>
                    <Genres data={singleGenres} />
                </div>

                {/* Circle rating and Video player */}
                <div className='flex items-center gap-x-2 py-7 md:py-4 lg:py-7'>
                    <CircleRating rating={data?.vote_average.toFixed(1)} />
                    <button 
                        className='flex items-center px-2 group'
                        onClick={() => {
                            setShow(true);
                            setVideoId(video?.key);
                        }}
                    >
                        <IoPlayCircleOutline className='text-6xl text-white group-hover:text-primary' />
                        <span className='font-secondary text-stone-300 group-hover:text-white'>Play Trailer</span>
                    </button>
                </div>

                {/* Overview */}
                <div className='pb-4 md:pb-2 lg:pb-4'>
                    <h4 className='text-white drop-shadow-sm font-primary text-2xl tracking-wider pb-2 md:pb-1 lg:pb-2'>
                        Overview
                    </h4>
                    <p className='text-stone-300 drop-shadow-sm'>{data?.overview}</p>
                </div>

                {/* Info */}
                <ul className='space-y-4 md:space-y-2 lg:space-y-4 text-white drop-shadow-sm'>
                    <li>
                        <div className='flex items-center gap-x-6'>
                            {data?.status && (
                                <div className='text-stone-300'>
                                    <strong className='text-white'>Status:{" "}</strong>{data?.status}
                                </div>
                            )}

                            {data?.status && (
                                <div className='text-stone-300'>
                                    <strong className='text-white'>Release Date:{" "}</strong>{dayjs(data?.release_date).format("MMM D, YYYY")}
                                </div>
                            )}

                            {data?.status && (
                                <div className='text-stone-300'>
                                    <strong className='text-white'>Runtime:{" "}</strong>{toHoursAndMinutes(data?.runtime)}
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        {director?.length > 0 && (
                            <div className='flex items-center gap-x-2'>
                                <strong>Director:{" "}</strong>
                                <div className='text-stone-300'>
                                    {director?.map((dt, ind) => (
                                        <span key={ind}>
                                            {dt?.name} {director?.length - 1 !== ind && ", "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                    </li>

                    <li>
                        {writer?.length > 0 && (
                            <div className='flex items-start gap-x-2'>
                                <strong>Writer:{" "}</strong>
                                <div className='text-stone-300'>
                                    {writer?.map((d, i) => {
                                        return (
                                            <span key={i}>
                                                {d?.name} {writer?.length - 1 !== i && ", "}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default DetailsArticle;

DetailsArticle.propTypes = {
    poster: PropTypes.string,
    data: PropTypes.any,
    singleGenres: PropTypes.any,
    director: PropTypes.any,
    writer: PropTypes.any,
    setShow: PropTypes.any,
    setVideoId: PropTypes.any,
    video: PropTypes.any
}