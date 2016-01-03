import ReactDOM from 'react-dom';
import App from 'components/App';
import {Provider} from 'react-redux';
import {store} from 'store';
import Routes from 'Routes';

ReactDOM.render(
	<Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('App')
);
