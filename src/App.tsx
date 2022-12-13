import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../src/pages/home';

import '../src/assets/styles/app.scss';

/**
 * App script.
 *
 * @constructor
 */
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
