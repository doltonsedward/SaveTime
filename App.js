import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import NativeBase
import { extendTheme, NativeBaseProvider, Box } from 'native-base'
import TextTodo from './src/components/atoms/TextTodo';
import Home from './src/screens/Home';

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#eeeffc',
        100: '#cbcef6',
        200: '#a8adf0',
        300: '#858cea',
        400: '#626be4',
        500: '#3f4ade',
        600: '#232fd1',
        700: '#1e27ae',
        800: '#181f8c',
        900: '#121869',
      },
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <Box style={styles.container}>
        <Home />
      </Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
