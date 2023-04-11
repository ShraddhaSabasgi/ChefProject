import React from 'react-router-dom';
import Header  from '../components/Header/Header';
import Footer  from '../components/Footer/Footer';

import { BrowserRouter } from 'react-router-dom';
import RouterPaths from './RouterPaths.jsx';
const Router = ()=>{
    
    return(
        <BrowserRouter>
        <div>
        <Header/>
        </div>
        <div>
        <RouterPaths />
        </div>
        <div>
        <Footer />
        </div>
        </BrowserRouter>
    )
}
export default Router