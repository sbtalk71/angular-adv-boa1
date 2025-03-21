const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');



const PORT=3000;
const app=express();
const SECRET_KEY='welearntangularforcontinuousfivedays';

app.use(cors());
app.use(bodyParser.json())

const users=[
    {id:1,username:'user1',password:'password1'},
    {id:2,username:'admin',password:'admin123'}
]
app.post('/login',(req,res)=>{

    const {username,password}=req.body;
    const user=users.find(u=>u.username===username&&u.password===password);
    if(!user){
        return res.status(401).json({message:'Invalid Credentials'});
    }
    const token=jwt.sign({id:user.id,password:user.password},SECRET_KEY,{expiresIn:'10h'});
    res.json({token})
})

//middleware to verify token
const verifyToken=(req,res,next)=>{
    const authData=req.headers['authorization']
    const token=authData.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'token required'})
    }
    jwt.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).json({message:'invalide token'})
        }
        req.user=decoded;
        next();
    })
}

app.get('/secured',verifyToken,(req,res)=>{
return res.json({message:"Secured Content accessed",user:req.user})
})

app.listen(PORT,()=>{
    console.log(`JWT Server running on port ${PORT}`);
})