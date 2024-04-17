/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import CoreAppStack from './src/Navigation/CoreAppStack';
import { navigationRef } from './src/Navigation/Navigator';
import store from './src/Redux/ConfigureStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NativeBaseProvider>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <CoreAppStack />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
});

export default App;
