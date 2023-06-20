import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  retuit: Number,
  replies: Number,
  Handle: String,
  image: String,
  time: String,
  title: String,
  topic: String,
  userName: String,
}, {collection: 'tuits'});
export default schema;