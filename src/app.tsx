import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
// import Swap from './components/swap';

const Layout = lazy(() => import('./layout'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Swap = lazy(() => import('./components/swap'));
const _404 = lazy(() => import('./components/_404'));

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/swap" element={<Swap />} />

                    <Route path="*" element={<_404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// export const PrivateRoute = ({ redirect = '/login', ...props }) => {
//     const { user } = useAuth()

//     return user ? <Route {...props} /> : <Navigate to={redirect} />
// }
