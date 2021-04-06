const redux = require('redux');
const createStore=redux.createStore ; 

const BUY_LAPTOP = 'BUY_LAPTOP';
// ----------- action ---------------
// a js object having a property called 'type'.
// action is the only way to interact with the store
// describes the 
// actionCreator: a function that returns a action i.e. a js object.
// buyLaptop -> Action Creator
// the object inside return() is an action.
const buyLaptop = () => {
	return {
		type: BUY_LAPTOP
	}
}

// ----------- reducer ------------
// does the actual state changing thing. Like the shopkeeper in a shop.  
// specifies how the app's state changes in response to actions sent to the store
// reducer is a function that takes two params, and outputs a new state
// reducer(previousState,action)=>newState

const initialState = {
	totalLaptop:100
}

const reducer = (state = initialState, action) => {
	
	// mathch the action type to perform operation
	switch (action.type) {
		case BUY_LAPTOP: return {
			//make a copy of initial state
			...state ,
			totalLaptop: state.totalLaptop - 1 
		}
		default: return state
	}
}

// ----------     store ------------
//reducer is the shopkeeper. he has the access to states/products in a shop. 
//So, place him inside while creating store.reducer holds the initial state, so in terms, store is tracking the states
// Holds application state
// allows access to state via getState()
// allows state to be updated via dispatch(action)
// registers listeners via subscribe(listener)
// unregisters listeners via the function returned by subscribe(listener)
const store = createStore(reducer);
console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => console.log('State was updated. So I was called. ', store.getState()));
store.dispatch(buyLaptop());
store.dispatch(buyLaptop());
unsubscribe();

