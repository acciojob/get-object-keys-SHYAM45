//your JS code here. If required.

const student = {
	name: "John",
}

function getKeys(Student){
	for(let key in Student){
		return Object.keys(Student)
	}
}

console.log(getKeys(Student))
