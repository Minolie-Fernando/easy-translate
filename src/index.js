//import react + react DOM libraries
import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './app';

//get a refernce to the div with the id root
const rootElement = document.getElementById('root');

//tell react to take control of that element
const root = ReactDOM.createRoot(rootElement);

//create a component
// function App() {
//     return <h1>Hello</h1>;
// }

//show the component on the screen
root.render(
    <StrictMode>
        <div className='wrapper'>
            <App />
        </div>
    </StrictMode>
);