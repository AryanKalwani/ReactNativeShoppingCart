import React from 'react';
import Products from './components/Products';
import Checkout from './components/Checkout';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const store = createStore(rootReducer);

const AppStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{headerShown: true}} >
                <AppStack.Screen name="Products" component={Products} />
                <AppStack.Screen name="Checkout" component={Checkout} />
            </AppStack.Navigator>
        </NavigationContainer>    
    </Provider>     
  );
};

export default App;