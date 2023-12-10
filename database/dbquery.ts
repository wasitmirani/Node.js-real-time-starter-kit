import mongoose from 'mongoose';
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ts_auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});