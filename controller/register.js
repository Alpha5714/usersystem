const Register = require('../models/register');

function reg(){
    return{
        index(req,res){
            res.render('register')
        },
        post(req,res){
            const{name,uname,num,email,password}=req.body;
            if(!name || !email || !uname || !num || !password){
                return res.render('field')
            }
            Register.exists({email:email},(err,result)=>{
                if(result){
                    return res.render('user')
                }
            })



            const regis = new Register({
                name:name,
                uname:uname,
                num:num,
                email:email,
                password:password
            })
            regis.save().then((regis)=>{
                console.log(req.body)
               return res.redirect('/');
            }).catch(err=>{
               return res.redirect('/register')
            })
        }
    }
}
module.exports =reg