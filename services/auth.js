const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error('JWT_SECRET environment variable is required');
}

function setUser(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, secret);
}

function getUser(token) {
    if (!token) {
        return null;
    }
    try {
        return jwt.verify(token, secret);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}


module.exports = {
    setUser,
    getUser
}