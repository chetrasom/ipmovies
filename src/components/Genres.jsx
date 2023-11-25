import { useSelector } from "react-redux"
import { selectorHome } from "../features/home/homeSlice"
import PropTypes from 'prop-types';

const Genres = ({ data, alignPosition }) => {
    const { genres } = useSelector(selectorHome);

    return (
        <div className={`flex flex-wrap gap-1 shadow-sm ${alignPosition}`}>
            {data?.slice(0, 2)?.map((g) => {
                {/* console.log(genres[g]?.name) */}
                if (!genres[g]?.name) return;

                return (
                    <div
                        key={g}
                        className="max-w-max bg-primary-content text-white text-xs px-1 py-0.5 rounded-sm"
                    >
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres;

Genres.propTypes = {
    data: PropTypes.any,
    alignPosition: PropTypes.string
}