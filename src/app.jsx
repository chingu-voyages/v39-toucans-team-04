import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import Landing from './components/landing';
import Categories from './components/categories';
import { TriviaPage } from './components/trivia';
import './styles/styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Landing/> } />
            <Route path="/categories" element={ <Categories/>} />
            <Route path='/triva' element={ <TriviaPage /> } />
        </Routes> 
      </BrowserRouter>
    </Provider>
  );
}


const root = createRoot(document.getElementById('app'));
root.render(<App />);
