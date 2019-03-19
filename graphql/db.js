export const people = [{
	id: "0",
	name: "a",
	age: 28,
	gender: "male"
}, {
	id: "1",
	name: "b",
	age: 27,
	gender: "female"
}, {
	id: "2",
	name: "c",
	age: 26,
	gender: "male"
}, {
	id: "3",
	name: "e",
	age: 25,
	gender: "female"
}, {
	id: "4",
	name: "g",
	age: 24,
	gender: "male"
}, {
	id: "5",
	name: "h",
	age: 23,
	gender: "female"
}]

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};