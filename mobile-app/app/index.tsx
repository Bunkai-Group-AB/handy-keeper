import { ThemeProvider } from '@shopify/restyle';
import MenuPage from './pages/MenuPage';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <MenuPage/>
  </ThemeProvider>
)
export default App