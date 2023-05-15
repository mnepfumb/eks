import { Schema, model, models } from 'mongoose';
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    username : String,
    email: String,
    password: String
})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.changePasswordAfter = async function( JWTTimestamp ) {
    if (this.passwordChangedAt) {}
    return false;
};

const Users = models.eks_user || model('eks_user', userSchema);

export default Users;

