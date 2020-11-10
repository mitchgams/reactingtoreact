import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App myName={'Mitch Gams'} text={'I like tuna salad sandwiches'} />
  </React.StrictMode>,
  document.getElementById('root')
);

