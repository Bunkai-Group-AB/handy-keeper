import { ThemeProvider } from '@shopify/restyle'
import MenuScreen from './pages/MenuScreen'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <MenuScreen />
  </ThemeProvider>
)
export default App
