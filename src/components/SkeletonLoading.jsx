import Skeleton from "./Skeleton"

const SkeletonLoading = () => {
    return (
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6'>
            <div><Skeleton /></div> 
            <div><Skeleton /></div>
            <div className='hidden md:block'><Skeleton /></div>
            <div className='hidden md:block'><Skeleton /></div>
            <div className='hidden lg:block'><Skeleton /></div>
            <div className='hidden lg:block'><Skeleton /></div>
        </div>

        // #1- Skeleton List
        // <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6'>
        //     {
        //         [...Array(6).keys()].map((i) => {
        //             return <Skeleton key={i} />
        //         })
        //     }
        // </div>
        
    )
}

export default SkeletonLoading