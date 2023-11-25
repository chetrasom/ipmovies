import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { fetchDataFromAPI } from '../utils/api';
import InfiniteScroll from "react-infinite-scroll-component";

import { LoadingSpinner, MovieCardSearch } from '../components';
//import noResults from '../assets/images/no-results.png';

const SearchResult = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);


    return (
        <section className="pt-[160px] text-white">
            <div className="container">

                {loading && <LoadingSpinner />}
                {!loading && (
                    <div>
                        {data?.results.length > 0 ? (
                            <>
                                {/* Search title */}
                                <div className="mb-6">
                                    <h3 className="h2">
                                        {`Search ${data?.total_results > 1 ? "results" : "result"} of '${query}'`}
                                    </h3>
                                </div>

                                {/* InfiniteScroll Movie card */}
                                <InfiniteScroll
                                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 py-[30px]"
                                    dataLength={data?.results?.length || []}
                                    next={fetchNextPageData}
                                    hasMore={pageNum <= data?.total_pages}
                                    loader={<div className="col-span-6"><LoadingSpinner /></div>}
                                >
                                    {data.results.map((item, index) => {
                                        if (item.media_type === "person") return;
                                        return (
                                            <MovieCardSearch 
                                                key={index} 
                                                data={item} 
                                                fromSearch={true}
                                            />
                                        )
                                    })}
                                </InfiniteScroll>
                            </>
                        ) : (
                            <span>Sorry, Result not found !</span>
                        )}
                    </div>
                )}

                
            </div>
        </section>
    )
}

export default SearchResult