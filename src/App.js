import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'



export default function App() {
  return (    
      <NavigationContainer>
        <StatusBar style="auto" />          
          <Routes />
      </NavigationContainer>
  );
}
