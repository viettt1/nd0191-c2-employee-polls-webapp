import { LOGOUT_AUTHED_USER, LOGIN_AUTHENTICATED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case LOGIN_AUTHENTICATED_USER:
            //sessionStorage.setItem('user', JSON.stringify(action.authedUser))
            return action.authedUser;
        case LOGOUT_AUTHED_USER:
            sessionStorage.removeItem('user')
            return null;
        default:
            //const user = JSON.parse(sessionStorage.getItem('user'))
            return state
    }
}
