import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import AllApps from './components/AllApps';

const App = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AllApps />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
