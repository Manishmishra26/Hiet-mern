const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const authHeader = req.header('Authorization');
    
if(!authHeader){
    return res.status(401).json({
        message: 'No token'
    })
}
const token = authHeader.split('')[1];
if(!token){
    return res.status(401).json({
    message : 'invalid'
    })
}
try{
    const  decoded = jwt.varify(token,process.env.JWT_SECRET)
    ReferenceError.user ={
        doctorId: decoded.doctorId
    };
    next();
}catch(e){
    res.status(401).json({
        message: 'Tocken not valid'
    })
}
};
