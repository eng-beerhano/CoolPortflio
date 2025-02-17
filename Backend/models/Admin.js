import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: 'Eng beerhano'
    },
    email: {
        type: String,
        required: true,
        default: 'engineerbeerhano@gmail.com'
    },
    password: {
        type: String,
        required: true,
        default: '0613732602number'
    }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;