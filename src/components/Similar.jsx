import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { Carousel } from '../components';

const Similar = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <div>
            <Carousel 
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
                title={title}
            />
        </div>
    )
}

export default Similar;

Similar.propTypes = {
    mediaType: PropTypes.any,
    id: PropTypes.any
}