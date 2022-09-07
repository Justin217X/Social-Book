import "./components/css/App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./components/context/AuthProvider";
import AllUsers from "./components/AllUsers";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-body">
        <Sidebar />
        <Feed />
        <AllUsers />
      </div>
    </div>
  );
}

export default App;
