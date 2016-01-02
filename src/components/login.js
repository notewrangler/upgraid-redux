import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {inputStyles, BUTTON_STYLES} from 'helpers/styles';
import {setCurrentUserName}from 'actions/users';
import {setCurrentPassword} from 'actions/users';
import {loginUser} from 'actions/users';

let styles = {
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    ...BUTTON_STYLES,
    float: 'right',
    marginTop: 10
  }
};

class Login extends Component {
  static propTypes = {
    currentUserName: PropTypes.string.isRequired,
		currentPassword: PropTypes.string.isRequired,
    setCurrentUserName: PropTypes.func.isRequired,
		setCurrentPassword: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
  }

  state = {
    focused: true
  }

  render() {
    let {currentUserName, setCurrentUserName, currentPassword, setCurrentPassword} = this.props;
    return (
      <div>
        <div style={styles.title}>
          Welcome to UpgrAID - Please Login or Register
        </div>
        <input
          autoFocus={true}
          placeholder="Username"
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
          onChange={(event) => setCurrentUserName(event.currentTarget.value)}
          style={inputStyles(this.state.focused)}
          value={currentUserName}
        />
				<input
					type='password'
					placeholder="Password"
					onBlur={() => this.setState({focused: false})}
					onFocus={() => this.setState({focused: true})}
					onChange={(event) => setCurrentPassword(event.currentTarget.value)}
          style={inputStyles(this.state.focused)}
				/>
        <button style={styles.button} onClick={::this.handleClick}>
          Log In
        </button>
      </div>
    );
  }

  handleClick() {
    let {loginUser, currentUserName, currentPassword, setCurrentUserName, setCurrentPassword} = this.props;
    loginUser(currentUserName, currentPassword);
    setCurrentUserName('');
    setCurrentPassword('');
  }
}

function select(state) {
  return {
    currentUserName: state.login.currentUserName,
		currentPassword: state.login.currentPassword
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setCurrentUserName: setCurrentUserName,
    setCurrentPassword: setCurrentPassword,
    loginUser: loginUser
  }, dispatch);
}

export default connect(select, actions)(Login);
