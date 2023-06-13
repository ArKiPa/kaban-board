import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import MainPage from '../MainPage/MainPage';
import TaskPage from '../TaskPage/TaskPage';
import ContextProvider from '../ContextProvider/ContextProvider.js'

function Api () {

    return (
        <ContextProvider>
            <Router>
                <Header />
                    <Routes>
                        <Route path='/'exact element={<MainPage/>} />
                        <Route path='/:classId/:userId'exact element={<TaskPage/>} />
                    </Routes>
                <Footer />
            </Router>
        </ContextProvider>
    )
}

export default Api