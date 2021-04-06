const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; 

const BUY_BOOK = 'BUY_BOOK';
const BUY_PEN = 'BUY_PEN';

// buy_book action creator
const buyBook = () => {
	return {
		type:BUY_BOOK
	}
}

// buy_pen action creator
const buyPen = () => {
	return {
		type:BUY_PEN
	}
}
//initial book state 
const initialBookState = {
	totalBooks:50
}
//initial pen state
const initialPenState = {
	totalPen:10
}

// book reducer
const bookReducer = (state = initialBookState, action) => {
	switch (action.type) {
		case BUY_BOOK: return {
			...state,
			totalBooks: state.totalBooks - 1 
		}
		default:
			return state
	}
}

// pen reducer
const penReducer = (state = initialPenState, action) => {
	switch (action.type) {
		case BUY_PEN: return {
			...state,
			initialPenState: state.totalPen - 1 
		}
		default: return state;
	}
}

// combine two reducers to pass as argument to store
const rootReducer = combineReducers({
	book: bookReducer,
	pen: penReducer
});

// create the store
const store = createStore(rootReducer);

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
	console.log("state was changed. Updated state is: ", store.getState());
});
// dispatch takes an action as argument
store.dispatch(buyPen());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyBook());

unsubscribe();
