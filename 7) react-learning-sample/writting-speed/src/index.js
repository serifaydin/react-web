import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ThemeContextProvider from './contexts/ThemeContext';
import ChallengeContextProvider from './contexts/ChallengeContext';

const AppConnector = () => {
  return (
    <ThemeContextProvider>
      <ChallengeContextProvider>
        <App />
      </ChallengeContextProvider>
    </ThemeContextProvider>
  )
}

ReactDOM.render(<React.StrictMode><AppConnector/></React.StrictMode>,document.getElementById('root'));