import NavBar from './components/views/NavBar/NavBar';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

const App = () => {
  return (
    <div className='container'>
      <NavBar />
    </div>
  );
};

export default App;
