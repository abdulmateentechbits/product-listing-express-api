import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    name: String,
    message: String,
})

var LoginMessage = mongoose.model('LoginMessage', loginSchema);

export default LoginMessage;