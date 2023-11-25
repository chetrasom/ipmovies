import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { DetailsBanner, TopCast, VideosSection, Similar, Recommendation } from '../components';

const Details = () => {
    const { mediaType, id } = useParams();
    const { data: videos, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

    return (
        <>
            <DetailsBanner video={videos?.results?.[0]} crew={credits?.crew} />

            <div className='container py-[30px]'>
                <TopCast data={credits?.cast} loading={creditsLoading} />
            </div>

            <div className='container pb-[30px]'>
                <VideosSection data={videos} loading={videosLoading} />
            </div>

            <div className='container pb-[30px]'>
                <Similar mediaType={mediaType} id={id} />
            </div>

            <div className='container pb-[40px]'>
                <Recommendation mediaType={mediaType} id={id} />
            </div>
        </>
    )
}

export default Details