const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger');
const { default: thunk } = require('redux-thunk');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const initialState = {
	loading: false,
	users: [],
	error: ''
};

const FETCH_USR_REQUEST = 'FETCH_USR_REQUEST';
const FETCH_USR_SUCCESS = 'FETCH_USR_SUCCESS';
const FETCH_USR_FAILURE = 'FETCH_USR_FAILURE';

// action creator
const fetchUsrRequest = () => {
	return {
		type: FETCH_USR_REQUEST,
		info: 'Request for users from api'
	}
}

const fetchUsrSuccess = users => {
	return {
		type: FETCH_USR_SUCCESS,
		info: 'Fetched user from api successfully',
		payload:users
	}
}

const fetchUsrFailure = error => {
	return {
		type: FETCH_USR_FAILURE,
		info: 'Failed to load user from api',
		payload:error
	}
}

// reducers
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USR_REQUEST: return {
			...state,
			loading:true
		}
		case FETCH_USR_SUCCESS: return {
			...state,
			loading: false,
			users: action.payload,
			error:''
		}
		case FETCH_USR_FAILURE: return {
			...state,
			loading: false,
			users: [],
			error:action.payload
		}
	}
}

// async action creator
// thunk middleware provides the ability to the action creator
// to return a function instead of an object.
// this returned funciton can be impure i.e can make async api call
// this function takes dispatch as argument
const fetchUsers = () => {
	return (dispatch => {
		dispatch(fetchUsrRequest()); 
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				const users = response.data.map(user => user.id);
				dispatch(fetchUsrSuccess(users));
			})
			.catch(error => {
				dispatch(fetchUsrFailure(error.message));
		})
	});
}


// redux store
const store = createStore(reducer, applyMiddleware(logger,thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch((fetchUsers())); 
