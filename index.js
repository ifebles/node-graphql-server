const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schemas");

const app = express();
const PORT = 3000;


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});