import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPage'
import { AboutPage } from './Pages/AboutPage'
import { NotFoun404 } from './Pages/NotFoun404'
import { NavBar } from './NavBar'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <NavBar />

            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* Rutas No Validas */}

                <Route path="error404" element={<NotFoun404/>}/>

                <Route path="/*" element={ <Navigate to="/error404" /> }/>

            </Routes>
        </>
    )
}
