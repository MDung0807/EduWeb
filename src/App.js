import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routers from './routes';
import { Home } from './pages/client';
function App() {
  return (
    <Router>
      <Routes>
        {routers.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={true}
            render={props => (
              <route.layout>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
