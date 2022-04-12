import { AppRoutes } from './routes';
import { GlobalStyle } from './global/global';
import { BrowserRouter as Route} from 'react-router-dom';

function App() {
  return (
    <Route>    
      <AppRoutes />           
      <GlobalStyle />      
    </Route>
  );
}

export default App;
