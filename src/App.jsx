import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SharedLayout, Home, Details, Explore, SearchResult, PageNotFound } from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SharedLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':mediaType/:id',
                element: <Details />,
            },
            {
                path: 'search/:query',
                element: <SearchResult />
            },
            {
                path: 'explore/:mediaType',
                element: <Explore />
            }
        ],
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App