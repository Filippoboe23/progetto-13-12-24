import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/SideBar";
import MainPage from "./components/MainPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default App;
