import jwt from 'jsonwebtoken';
const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '15d' });
    res.cookie("jwt", token, { maxAge: 15 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // Cookie cannot be accessed by client-side JavaScript, prevent XSS attacks cross-site scripting attacks
    sameSite: 'strict', // Cookie will only be sent in a first-party context, prevent CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV === 'production' // Cookie will only be sent over HTTPS in production
});

};
export default generateTokenAndSetCookie;
//    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
//    return token;
