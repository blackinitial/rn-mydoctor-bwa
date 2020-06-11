import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, GetStarted} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <GetStarted />
    </NavigationContainer>
  );
};

export default App;
