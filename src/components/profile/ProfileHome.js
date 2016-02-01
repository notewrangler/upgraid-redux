import {Component, PropTypes} from 'react';
import history from 'helpers/history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile} from 'actions/profile';
// import AvatarRankXp from 'AvatarRankXp';

class ProfileHome extends Component {
	static propTypes = {
    currentUserName: PropTypes.string.isRequired,

    getProfile: PropTypes.func.isRequired
  }
	render() {
		return (
			<h1>hi</h1>
		);
	};
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
    getProfile: getProfile
  }, dispatch);
}
export default ProfileHome;
// export default connect(select, actions)(ProfileHome);;
