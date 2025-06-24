import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import TarefasProvider from './src/context/tarefas';
import AuthProvider from './src/context/auth';
import { navigationRef } from './RootNavigation';

import IdiomaProvider from './src/context/IdiomaContext';
import ThemeProvider from './src/context/Theme';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <IdiomaProvider>
        <AuthProvider>
          <TarefasProvider>
            <ThemeProvider>
              <StatusBar style="dark" />
              <Routes />
            </ThemeProvider>
          </TarefasProvider>
        </AuthProvider>
      </IdiomaProvider>

    </NavigationContainer>
  );
}