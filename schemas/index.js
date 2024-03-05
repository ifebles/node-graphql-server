const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const UserType = require("./typeDefs/userType");
const userData = require("../MOCK_DATA.json");


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      resolve: (_parent, _args) => userData,
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (_parent, args) => {
        const user = {
          id: userData.length + 1,
          firstname: args.firstname,
          lastname: args.lastname,
          email: args.email,
          password: args.password,
        };

        userData.push(user);
        return user;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
