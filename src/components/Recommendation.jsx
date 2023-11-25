import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { Carousel } from '../components';

const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

    return (
        <div>
            <Carousel 
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
                title='recommendations'
            />
        </div>
    )
}

export default Recommendation;

Recommendation.propTypes = {
    mediaType: PropTypes.any,
    id: PropTypes.any
}