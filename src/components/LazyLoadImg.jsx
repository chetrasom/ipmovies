import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../style/customLazyLoad.css";
import PropTypes from 'prop-types';

const LazyLoadImg = ({ src, className }) => {
    return (
        <LazyLoadImage 
            className={className || "w-full h-full object-cover"}
            alt=''
            effect='blur'
            src={src}
        />
    )
}

export default LazyLoadImg;

LazyLoadImg.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
}