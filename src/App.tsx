import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../src/pages/home';
import ProductCategory from "./pages/product-category";
import ProductDetail from "./pages/product-detail";

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
                <Route path="/products/:category" element={<ProductCategory/>}/>
                <Route path="/products/:category/:productSlug"
                       element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
