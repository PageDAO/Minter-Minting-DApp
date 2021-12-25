import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './router/PrivateRoute';
import Home from './pages/Home';
import Activity from './pages/Activity'
import History from './pages/History'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/activity" component={Activity} />
        <PrivateRoute exact path="/history" component={History} />
        <PrivateRoute path="/*" component={() => <div style={{ padding: 30 }}><h2> Page Not Found </h2></div>} />
      </Switch>
    </Router>
  );
}

export default App;