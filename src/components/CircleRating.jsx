import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const CircleRating = ({ rating }) => {
    return (
        <div className=''>
            <CircularProgressbar 
                value={rating}
                maxValue={10}
                text={rating}
                background
                backgroundPadding={2}
                styles={buildStyles({
                    pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                    textSize: "26px",
                    textColor: 'red',
                    backgroundColor: "#ffffff",
                })}
                
                className='font-primary w-12 h-12'
            />
        </div>
    )
}

export default CircleRating;

CircleRating.propTypes = {
    rating: PropTypes.any
}