import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Reservation from './pages/reservation';
import Login from './pages/login';
import ConfirmedBooking from './pages/confirmedBooking';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route element={<Home />} index />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="confirm" element={<ConfirmedBooking />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
