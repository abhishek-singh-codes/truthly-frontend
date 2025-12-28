import './App.css';
import Navbar from './components/navbar/Navbar' 
import FeedNoAuth from './components/Feed/FeedNoAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center">
        <FeedNoAuth />
      </div>
      
    </div>
  );
}

export default App;
