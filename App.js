import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store';
import {AppNavigator} from './src/navigation';
// import NotifService from './NotifService';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};

  //   this.notif = new NotifService(
  //     this.onRegister.bind(this),
  //     this.onNotif.bind(this),
  //   );
  // }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
