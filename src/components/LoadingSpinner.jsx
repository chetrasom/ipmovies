import { Watch } from  'react-loader-spinner'

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center w-full h-[250px]'>
            <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default LoadingSpinner;