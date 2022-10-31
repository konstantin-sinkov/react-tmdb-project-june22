import './App.css';
import {Header, MovieDetails, Movies} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
    
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route path={"movies"} element={<Movies/>}/>
                    <Route path={"movies/movie/:id"} element={<MovieDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
