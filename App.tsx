import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import theme from "./src/styles/theme/defaultTheme";
import { Routes } from './src/routes';

export default function App() {
  const [fontLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />

      {fontLoad ? (
          <Routes />
        ) : 
          <Text>Não foi carregada</Text>
      }

    </ThemeProvider>
  );
}