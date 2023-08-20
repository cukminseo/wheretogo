import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Mainpage from "./pages/Mainpage/Mainpage.jsx";
import Mypage from "./pages/Mypage/Mypage.jsx";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Mainpage" element={<Mainpage />} />
                <Route path="/Mypage" element={<Mypage />} />
            </Routes>
        </div>
    );
}

export default App;
