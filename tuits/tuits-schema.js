import mongoose from 'mongoose';
const schema = mongoose.Schema({
  image: String,
  handle: String,
  time: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'});
export default schema;