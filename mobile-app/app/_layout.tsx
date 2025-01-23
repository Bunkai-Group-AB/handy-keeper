import { ThemeProvider } from '@shopify/restyle'
import { Stack } from 'expo-router'
import theme from './theme'

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="pages/configure" />
      </Stack>
    </ThemeProvider>
  )
}
