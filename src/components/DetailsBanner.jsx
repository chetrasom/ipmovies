import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import { useSelector } from 'react-redux';
import { selectorHome } from '../features/home/homeSlice';

import { LazyLoadImg, DetailsArticle, VideoPopup, SkeletonDetailBanner  } from '../components';

const DetailsBanner = ({ video, crew }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);
    const { url } = useSelector(selectorHome);

    // images
    const background = url?.backdrop + data?.backdrop_path;
    const poster = url?.backdrop + data?.poster_path;

    // genres
    const singleGenres = data?.genres?.map((g) => g.id);

    // director and write
    const director = crew?.filter((f) => f?.job === "Director");
    const writer = crew?.filter((f) => f?.job === "Screenplay" || f?.job === "Story" || f?.job === "Writer");

    return (
        <section className='relative'>
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>

                            <div className='hidden md:block h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden opacity-30 mb-[30px]'>
                                <LazyLoadImg src={background} />
                            </div>

                            <div className='md:absolute top-[5%] left-0 w-full z-10 mt-24 md:mt-16 lg:mt-28'>
                                <DetailsArticle 
                                    poster={poster} 
                                    data={data} 
                                    singleGenres={singleGenres} 
                                    director={director}
                                    writer={writer}

                                    setShow={setShow}
                                    setVideoId={setVideoId} // setVideoId in DetailsArticles
                                    video={video}
                                />
                            </div>

                            <VideoPopup 
                                show={show}
                                setShow={setShow}
                                videoId={videoId}
                                setVideoId={setVideoId}
                            />

                        </React.Fragment>
                    )}
                </>
            ) : (
                <SkeletonDetailBanner />
            )}
        </section>
    )
}

export default DetailsBanner;

DetailsBanner.propTypes = {
    video: PropTypes.any,
    crew: PropTypes.any
}