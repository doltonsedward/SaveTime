import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import NativeBase
import { extendTheme, NativeBaseProvider, Box } from 'native-base'

import Container from './Container';

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#F9EEDD',
        100: '#F3DCBA',
        200: '#EDCA97',
        300: '#E7B974',
        400: '#E1A751',
        500: '#DC932E',
        600: '#C07D21',
        700: '#9D671B',
        800: '#7A5015',
        900: '#57390F',
      },
      secondary: {
        50: '#F9F1F0',
        100: '#EED6D3',
        200: '#E2BBB6',
        300: '#D69999',
        400: '#CB7C7C',
        500: '#BF5F5F',
        600: '#AF4646',
        700: '#923A3A',
        800: '#752F2F',
        900: '#582323',
      },
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <Box style={styles.container}>
        <Container />
      </Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
