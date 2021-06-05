import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import woofChi from './utils/woofChi';

import Home from './components/Home';
import Guild from './components/Guild';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/guild' component={Guild} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
