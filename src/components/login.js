import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Component, PropTypes} from 'react';
import {inputStyles, BUTTON_STYLES} from 'helpers/styles';
import {setCurrentUserInput, toggleshowModal} from 'actions/ui';
import {createUser} from 'actions/data/users';

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
    currentUserInput: PropTypes.string.isRequired,
    setCurrentUserInput: PropTypes.func.isRequired,
    toggleshowModal: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
  }

  state = {
    focused: true
  }

  render() {
    let {currentUserInput, setCurrentUserInput} = this.props;
    return (
      <div>
        <div style={styles.title}>
          Join Hipslack so you can chat!
        </div>
        <input
          autoFocus={true}
          placeholder="Username"
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
          onChange={(event) => setCurrentUserInput(event.currentTarget.value)}
          style={inputStyles(this.state.focused)}
          value={currentUserInput}
        />
				<input
					type='password'
					placeholder="Password"
					onBlur={() => this.setState({focused: false})}
					onFocus={() => this.setState({focused: true})}
					onChange={(event) => setCurrentUserPassword(event.currentTarget.value)}
				/>
        <button style={styles.button} onClick={::this.handleClick}>
          Log In
        </button>
      </div>
    );
  }

  handleClick() {
    let {loginUser, currentUserInput, setCurrentUserInput, setCurrentUserPassword} = this.props;
    createUser(currentUserInput);
    setCurrentUserInput('');
    toggleshowModal(false);
  }
}

function select(state) {
  return {
    currentUserInput: state.ui.currentUserInput,
		currentUserPassword: state.login.currentUserPassword
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setCurrentUserInput: setCurrentUserInput,
    setCurrentUserPassword: setCurrentUserPassword,
    loginUser: loginUser
  }, dispatch);
}

export default connect(select, actions)(CurrentUserInput);
