import './App.css';
import Navbar from './components/navbar/Navbar' 
import FeedNoAuth from './components/Feed/Feed';
import UserDetails from './components/user/UserDetails';
import UploadImage from './components/uploadImage/UploadImage';
import Distance from './components/DistanceRange/Distance'

function App() {
  return (
    <div className="h-screen ApApp overflow-hiddep">
      <Navbar />
      <div className='flex items-start w-full h-full gap-4 p-4 justify-evenly' >
        {/* for user details */}
        <div className='sticky flex-col hidden w-1/4 border border-blue-200 rounded-md shadow-md sm:flex md:p-4 top-20'>
          <UserDetails />
          <UploadImage />
        </div>
        {/* for feed */}
        <div className='w-full h-full max-w-sm p-4 overflow-y-auto border border-blue-200 rounded-md'>
          <FeedNoAuth />
        </div>
        {/* for to show top issue */}
        <div className='justify-center hidden w-1/4 border border-blue-200 rounded-md shadow-md sm:flex md:p-4'>
          <Distance />
        </div>
      </div>
      
    </div>
  );
}

export default App;
