import { useState } from "react"
import PropTypes from 'prop-types';

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0); // For active
    const [fromLeftPosition, setFromLeftPosition] = useState(0); // For change position background

    const activeTab = (tab, index) => {
        setFromLeftPosition(index)
        // setFromLeftPosition(index * 100) // Like that anyway

        setTimeout(() => {
            setSelectedTab(index)
        }, 300);

        onTabChange(tab, index)
    };

    return (
        <div>
            <div className="relative border h-10 md:h-11 lg:h-12 w-[160px] md:w-[175px] lg:w-[185px] flex justify-center rounded-md shadow-md overflow-hidden">
                {data.map((tab, index) => {
                    return (
                        <button
                            key={index}
                            aria-label="switch tabs"
                            className={`${selectedTab === index ? "text-base" : "text-white"} h-full w-full font-primary font-semibold z-20`}
                            onClick={() => activeTab(tab, index)}
                        >
                            {tab}
                        </button>
                    )
                })}
                <div className={`${fromLeftPosition ? 'left-[50%]' : 'left-0'} bg-accent absolute top-0 bottom-0 z-10 w-[50%] transition-all ease-linear duration-200`}></div>
            </div>
        </div>
    )
}

export default SwitchTabs;

SwitchTabs.propTypes = {
    data: PropTypes.array,
    onTabChange: PropTypes.func
}