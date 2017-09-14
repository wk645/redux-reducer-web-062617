export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return Object.assign({}, {friends: [...state.friends, action.friend]})
		case 'REMOVE_FRIEND':
			return ({...state, friends: state.friends.filter(friend => friend.id != action.id)})
		default:
			return state
	}
}

// { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] } to equal { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] }
