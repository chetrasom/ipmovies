import { Outlet } from 'react-router-dom';
import { Header, SidebarMenu, Footer } from '../components';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <SidebarMenu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default SharedLayout