import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/mainLayout';

import Feed from './components/Feed/Feed';
// import Home from './components/sidebar/home/home';
// import Profile from './components/sidebar/profile/profile';
// import Chat from './components/sidebar/chat/chat';
// import AddFreind from './components/sidebar/addFreind/addFreind';
// import Post from './components/sidebar/uploadPost/uploadPost';
// import More from './components/sidebar/more/more';
import Temp from './components/temp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ALL SIDEBAR PAGES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/home" element={<Temp />} />
          <Route path="/profile" element={<Temp />} />
          <Route path="/chat" element={<Temp />} />
          <Route path="/addFreind" element={<Temp />} />
          <Route path="/post" element={<Temp />} />
          <Route path="/more" element={<Temp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
