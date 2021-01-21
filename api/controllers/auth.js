//const JWT = require('jsonwebtoken')
//const SECRET = 'secret for m token, please dont tell anyone'

//module.exports.veriryToken = (req, res, token, next) => {
//    JWT.verify(token, SECRET, (err, decodedToken) => {
//        if(err)
//            return next(err)
//
//        return next()
//    })
//}

//module.exports.login = (req, res)=>{
//    if(req.body.email === 'test@gmail.com' && req.body.password == '123456'){
//        return res.json({token: JWT.sign({user_id:1}, SECRET)})
//    }
//
//    return res.status(400).end()
//}