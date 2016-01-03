import { Component } from 'react';
import history from 'helpers/history';
import { Router, Route, IndexRoute } from 'react-router';
import ProfileHome from 'components/profile/ProfileHome';
import Home from 'components/Home';
import App from 'components/App';

class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="profile" component={ProfileHome}/>
				</Route>
			</Router>
		);
	}
}

export default Routes;
