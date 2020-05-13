import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';
import WriteMessage from '../pages/WriteMessage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#3AB5C2' },
      header: () => <Header />,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="WriteMessage" component={WriteMessage} />
  </App.Navigator>
);

export default AppRoutes;
