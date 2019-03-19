const yunheur = {
  name: "yunheur",
  age: 28,
  gender: "male"
}

const resolvers = {
  Query: {
    person:() => yunheur
  }
}

export default resolvers;