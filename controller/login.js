const Login = require('../models/login');
const Register = require('../models/register');

function log(){
    return{
        index(req,res){
            return res.render('login')
        },
        post(req,res){
            const{email,password}=req.body;
            if(!email || !password){
                return res.render('field')
            }
            Register.exists({email:email, password:password},(err,result)=>{
                if(result){
                    return res.render('userlogged')
                }
                else{
                    return res.render('wrong')
                }
        })
    }
}
}
module.exports =log