import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Batangas-Bold.otf';
import './index.css';
import './styles/styles.css';
import Landing from './components/LandingPageComponent';
import Categories from './components/CategoriesPageComponent';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Landing/> } />
              <Route path="/categories" element={ <Categories/>} />
            </Routes> 
          </BrowserRouter>
      </Provider>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
