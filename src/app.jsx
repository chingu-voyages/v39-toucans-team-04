import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Landing from './components/landing';
import Categories from './components/categories';
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
