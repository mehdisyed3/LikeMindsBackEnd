import mongoose from 'mongoose';

//have to make sure that key values can  worh without  " "
const cardSchema = mongoose.Schema({
	name: String,
	url: String,
});

export default mongoose.model('cards', cardSchema);
