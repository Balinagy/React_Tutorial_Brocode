import propTypes from "prop-types"

function UserGreeting(props){
    const welcomeMessage = <p className="welcome-message">User is logged in: {props.username}</p>;

    const loginPrompt = <p className="login-prompt">Please log in</p>;

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}
UserGreeting.propTypes =
{
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting