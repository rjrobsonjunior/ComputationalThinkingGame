import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try{
        let token = req.header("Autorization");

        if(!token){
            return res.status(403).send("Acess Denied");
        }
        if( token.startsWhith("Bearer ")){
            token = token.slice(7, token.legth).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        return res.status(500).json({error: err.message});
    }
}