import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './components/context/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header />

      <div className='app-body'>
        <Sidebar />
        <Feed />
      </div>
      
    </div>
    </AuthProvider>
  );
}

export default App;
