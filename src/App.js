import './App.css';
import Navbar from './components/navbar/Navbar' 
import FeedNoAuth from './components/Feed/FeedNoAuth';
import UserDetails from './components/user/UserDetails';
import UploadImage from './components/uploadImage/UploadImage';
import Distance from './components/DistanceRange/Distance'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='flex items-start w-full gap-4 p-4 justify-evenly' >
        {/* for user details */}
        <div className='hidden w-1/4 border rounded-md sm:flex md:p-4 flex-col shadow-md border-blue-200'>
          <UserDetails />
          <UploadImage />
        </div>
        {/* for feed */}
        <div className='w-full max-w-sm p-4 border rounded-md border-blue-200'>
          <FeedNoAuth />
        </div>
        {/* for to show top issue */}
        <div className='hidden w-1/4 border border-blue-200 rounded-md sm:flex md:p-4 justify-center'>
          <Distance />
        </div>
      </div>
      
    </div>
  );
}

export default App;
