import {Component} from 'react';
import Login from 'components/Login';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <Login />
      </div>
    );
  }
}

export default Home;
