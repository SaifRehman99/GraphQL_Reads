const app = require('express')();
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://SAIF:saif@cluster0.pb5oy.azure.mongodb.net/graphQL?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection successful');
  } catch (error) {
    console.log('error connecting to MongoDB');
  }
};
connectDB();
app.use(cors());

// Schema here
const schema = require('./schema/schema');

// middleware to funnel all the request using this
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));
