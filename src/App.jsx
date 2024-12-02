import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Reservation from './pages/reservation';
import About from './pages/about';
import Menu from './pages/menu';
import Login from './pages/login';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route element={<Home />} index />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="about" element={<About />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
