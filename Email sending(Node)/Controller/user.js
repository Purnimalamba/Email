var nodemailer = require('nodemailer');
var User=require('../Model/user');
var Tempuser=require('../Model/tempUser');



exports.verifyuser = function (req, res) {
name=req.body.name;
password=req.body.password;
email=req.body.email;


var text = "";
    var MyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += MyString.charAt(Math.floor(Math.random() * MyString.length));

generated = text; 


let transporter=nodemailer.createTransport({
    service:'gmail',
    secure:false,
    port:'25',
    auth:{
        user:'purnima.lamba@kelltontech.com',
        pass:'novemberdecember'
    },
    tls:{
    rejectUnauthorized:false
    }
});

let helperoptions = {
    from:'Purnima Lamba <purnima.lamba@kelltontech.com',
    to:email,
    subject:'Email verification',
    text:'To activate your account click on the link ' + "http://localhost:2000/api/u1/adduser/" + generated,

};

transporter.sendMail(helperoptions,(error,info) =>{
if(error){
    //  Console.log(error);
     res.end();
}
console.log("Message was sent");
// console.log(info);

var tempuser = new Tempuser({ 
            name:name,
            email: email,
            password: password,
            number : generated


        });
       

        tempuser.save(function (err, response) { 
            if (err) {
                return res.json(req, res, err);
            }

            res.json({
                success: true,
                body: response,
                msg : "Success"
            })

        });


});



}

exports.adduser = function (req, res) { 
   
console.log( req.params.generated);
    Tempuser.findOne({number : req.params.generated}, function (err, response) {  
        if (err) {
            return res.json(req, res, err);
        }
else{


        var user = new User({ 
            name:response.name,
            email: response.email,
            password: response.password,
               

        });

        //  alert("Welcome" + name);
        console.log(user);

        user.save(function (err, response) { 
            if (err) {
                return res.json(req, res, err);
            }

            res.json({
                success: true,
                body: "Welcome  " +  name
            })

        });

}

    })
}




    exports.getuser=function(request,response){
    var name1=request.body.name;
    var password1=request.body.password;
    User.findOne({name:name1,password:password1},function(error,res){
        if(error){
         res.json({
                            "status": false,
                            "respData": {
                        "data": error
                                }
});
                }
             response.json({
            "status": true,
            "respData": {
             "data":res
            }
})
    });
    };




