import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme ({
  palette: {
    primary: {
      main:'#0A9B86'
  },

  error: {
    main:'#C5C5C5'
},

  }
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


