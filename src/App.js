import './App.css';
import Navbar from './components/navbar/Navbar' 
import FeedNoAuth from './components/Feed/FeedNoAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='flex items-start w-full gap-4 p-4 justify-evenly' >
        {/* for user details */}
        <div className='hidden w-1/4 border rounded-md sm:flex md:p-4'>
          
        </div>
        {/* for feed */}
        <div className='w-full max-w-sm p-4 border rounded-md'>
          <FeedNoAuth />
        </div>
        {/* for to show top issue */}
        <div className='hidden w-1/4 border rounded-md sm:flex md:p-4'>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
