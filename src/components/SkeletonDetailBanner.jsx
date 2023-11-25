

const SkeletonDetailBanner = () => {
    return (
        <section className="relative">
            <div className='hidden md:block h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden opacity-30 mb-[30px] bg-orange-400/25'>
            </div>

            <div className='md:absolute top-[5%] left-0 w-full z-10 mt-24 md:mt-16 lg:mt-28'>

                <div className="container flex flex-col gap-5 md:flex-row lg:gap-10">

                    <figure className='w-full md:w-[300px] lg:w-[340px] h-auto md:h-[400px] lg:h-[450px] flex items-center justify-center rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700'>
                        <svg 
                            className="w-10 h-10 text-gray-200 dark:text-gray-600" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            viewBox="0 0 16 20"
                        >
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                    </figure>

                    <div className="md:flex-1">

                        <div className="pb-3 md:pb-1 lg:pb-3">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[35%] mb-2.5"></div>
                        </div>

                        <div className='text-stone-300 drop-shadow-sm pb-4 md:pb-1 lg:pb-3'>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[30%] mb-2.5"></div>
                        </div>

                        {/* Genres */}
                        <div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[25%] mb-2.5"></div>
                        </div>

                        {/* Circle rating and Video player */}
                        <div className='flex items-center gap-x-2 py-7 md:py-4 lg:py-7'>
                            <div className="border-4 w-14 h-14 bg-gray-400 rounded-full"></div>
                            <div className="border-4 w-14 h-14 bg-gray-400 rounded-full"></div>
                        </div>

                        {/* Overview */}
                        <div className='pb-4 md:pb-2 lg:pb-4'>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50%] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[50%] mb-2.5"></div>
                        </div>

                        {/* Info */}
                        <ul className='space-y-4 md:space-y-2 lg:space-y-4 text-white drop-shadow-sm w-full'>
                            <li>
                                <div className='flex items-center gap-x-6'>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[35%] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[30%] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[25%] mb-2.5"></div>
                                </div>
                            </li>

                            <li>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[35%] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[30%] mb-2.5"></div>
                            </li>

                            <li>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[35%] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[30%] mb-2.5"></div>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default SkeletonDetailBanner