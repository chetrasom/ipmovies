import ReactPlayer from 'react-player/youtube'
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    return (
        <div 
            className={`${show ? 'visible opacity-100' : 'invisible opacity-0'} bg-secondary/20 fixed inset-0 z-30 backdrop-blur-sm scale-125 transition-all ease-linear duration-300`} 
            onClick={hidePopup}
        >
            <div className='w-full absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] max-w-[75%] md:top-[25%] md:-translate-y-[25%] lg:top-[40%] lg:-translate-y-[40%] lg:max-w-4xl'>
                <div className='font-primary font-bold text-right'>
                    <button 
                        type='button' 
                        aria-label='close' 
                        className='text-xl text-primary-hover border rounded-md p-1 hover:bg-white'
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className='bg-orange-300 h-[250px] md:h-[325px] lg:h-[425px] rounded-lg overflow-hidden mt-2'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        controls
                        width="100%"
                        height="100%"
                        // playing={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoPopup;

VideoPopup.propTypes = {
    show: PropTypes.any,
    setShow: PropTypes.any,
    videoId: PropTypes.any,
    setVideoId: PropTypes.any,
}