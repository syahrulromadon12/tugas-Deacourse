import React from 'react';
import MainLayout from './components/Layout/main.layout';
import Albums from './components/Albums/main.albums';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Posts from './components/Posts/main.post';
import Hompage from './components/Hompage/main.hompage';

const App = () => {
  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Hompage/>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<h1 className='text-center text-danger'>404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayout>

    </>
  );
}



export default App;
