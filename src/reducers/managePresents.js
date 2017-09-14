export function managePresents(state, action){
	switch (action.type) {
		case 'INCREASE':
			return {numberOfPresents: state.numberOfPresents + 1}
		default: 
			return state
	}
}


// Create copies of obj using Object.assign() with new and updated values
// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4}
// let olderDog = Object.assign({}, dog, {age: dog.age + 1})
// start with a new empty obj, copy over original dog, and overwrite the 
// age property with a new value of 5
// USE spread syntax to copy properties
// let olderDog = {...dog, age: dog.age + 1}
// return a new obj that contais all key-value pairs from dog copied over 
// with the age key overwritten with a new value