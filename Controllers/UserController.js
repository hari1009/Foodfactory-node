var database = require('../config/database');
const passwordgenerator = require('generate-password');
const bcrypt=require('bcryptjs');
//const passwordgenerator = require('generate-password');
exports.signup = function(request, response) {
  //console.log(req)
    let username=request.query.username;
    let useremail=request.query.useremail;
    let hashpassword='';
    //let password='';
    let password = passwordgenerator.generate({
      length: 8,
      numbers: true
  });
  bcrypt.hash(password, 12, function(errhash, hash) {
    if(errhash)
    {
      let output={"code":400,"message":errhash.message}
      response.send(output)
    }
    else{
      // database.query("select * from()", (err, res) => {
      // });
      hashpassword=hash;
      database.query("select * from  InsertUsers('"+username+"','"+useremail+"','"+hashpassword+"')", (err1, res1) => {
        if(err1)
        {
      //console.log(err)
      let output={"code":400,"message":err1.message}
      response.send(output)
        }
        else{
          let output={"code":200,"message":"user created successfully"}
          response.send(output)
        }
      });
    }
  });
//console.log(req.query.username)
//CREATE OR REPLACE FUNCTION InsertUsers(p_name character varying, p_email character varying, p_password character varying)


   // let insertloginlogrequest={"inputdata":stringifiedinput,"medium":useragent,"regid":regId,"ipaddress":ipaddress,"apiname":"get_panel_data","attachments":""}
// this.insertloginlog(insertloginlogrequest, function (result,err)
// {
// });
    
  };

 

  exports.signin=function(request,response)
{
let username=request.query.username;
let password=request.query.password;
let responsedata=[];
database.query("select * from  GetUsers('','"+username+"')", (err1, res1) => {
  if(err1)
  {
    let output={"code":400,"message":err1.message,"data":responsedata}
    response.send(output)
  }
  else{
if(res1.rowCount==0)
{
  let output={"code":400,"message":"User doesnt exist","data":responsedata}
  response.send(output)
}
else{
let hashedpassword=res1.rows[0]['password'];
let validateuserparams={passwordhash:hashedpassword,password:password}

// console.log(res1.rows[0])
this.validatemember(validateuserparams, function (result2,err2) //Validate user end
{
  if(err2)
  {
    let output={"code":400,"message":"Some error occured","data":responsedata}
    response.send(output)
  }
  else{
    if(result2==true)
    {
      let data={"userid":res1.rows[0]['userid'],"email":res1.rows[0]['email'],"name":res1.rows[0]['name']}
      responsedata.push(data)
      let output={"code":200,"message":"Successfully loggedin","data":responsedata}
     response.send(output)
    }
    else{
     let output={"code":400,"message":"Invalid credentials","data":responsedata}
     response.send(output)
    }
  }
     
    });
}
  }
})
}

exports.updatepassword=function(request,response)
{
  let username=request.query.username;
  let oldpassword=request.query.oldpassword;
  let newpassword=request.query.newpassword;
  let confirmpassword=request.query.confirmpassword;
  let responsedata=[];
  if(newpassword!=confirmpassword)
  {
    let output={"code":400,"message":"Current password and new password doesn't match"}
    response.send(output)
  }
  else{
    database.query("select * from  GetUsers('','"+username+"')", (err1, res1) => {
      if(err1)
      {
        let output={"code":400,"message":err1.message}
        response.send(output)
      }
      else{
    if(res1.rowCount==0)
    {
      let output={"code":400,"message":"User doesnt exist"}
      response.send(output)
    }
    else{
    let hashedpassword=res1.rows[0]['password'];
    let validateuserparams={passwordhash:hashedpassword,password:oldpassword}
    
    // console.log(res1.rows[0])
    this.validatemember(validateuserparams, function (result2,err2) //Validate user end
    {
      if(err2)
      {
        let output={"code":400,"message":"Some error occured","data":responsedata}
        response.send(output)
      }
      else{
        if(result2==true)
        {
          
          bcrypt.hash(newpassword, 12, function(errhash, hash) {
            if(errhash)
            {
              let output={"code":400,"message":errhash.message}
              response.send(output)
            }
            else{
              database.query("select * from  updatepassword('"+username+"','"+hash+"')", (err1, res1) => {
                if(err1)
                {
              //console.log(err)
              let output={"code":400,"message":err1.message}
              response.send(output)
                }
                else{
                  let output={"code":200,"message":"user password updated successfully"}
                  response.send(output)
                }
              });
            }
        });
      }
        else{
         let output={"code":400,"message":"Incorrect current password","data":responsedata}
         response.send(output)
        }
      }
         
        });
    }
      }
    })
  }
  
}

validatemember=function(request,response)
{
    var password=request.password;
    var hash=request.passwordhash;
    hash = hash.replace(/^\$2y(.+)$/i, '$2b$1');
     bcrypt.compare(password, hash).then(function(hashresult) {
     if(hashresult==true)
     {
        response(true);
     }
     else{
        response(false);
     }
    });
} 

exports.updateuser=function(request,response)
{
  let userid=request.query.userid;
  let username=request.query.username;
  let useremail=request.query.useremail;
  database.query("select * from  updateuser("+userid+",'"+username+"','"+useremail+"')", (err1, res1) => {
    if(err1)
    {
  //console.log(err)
  let output={"code":400,"message":err1.message}
  response.send(output)
    }
    else{
      let output={"code":200,"message":"user details updated successfully"}
      response.send(output)
    }
  });
}

exports.updatestatus=function(request,response)
{
  let userid=request.query.userid;
  let userstatus='true';
  database.query("select * from  updatestatus("+userid+",'"+userstatus+"')", (err1, res1) => {
    if(err1)
    {
  //console.log(err)
  let output={"code":400,"message":err1.message}
  response.send(output)
    }
    else{
      let output={"code":200,"message":"user status updated successfully"}
      response.send(output)
    }
  });
}

exports.resetpassword=function(request,response)
{
  let username=request.query.username;

    database.query("select * from  GetUsers('','"+username+"')", (err1, res1) => {
      if(err1)
      {
        let output={"code":400,"message":err1.message}
        response.send(output)
      }
      else{
    if(res1.rowCount==0)
    {
      let output={"code":400,"message":"User doesnt exist"}
      response.send(output)
    }
    else{
   
      let password = passwordgenerator.generate({
        length: 8,
        numbers: true
    });
    bcrypt.hash(password, 12, function(errhash, hash) {
      if(errhash)
      {
        let output={"code":400,"message":errhash.message}
        response.send(output)
      }
      else{
    
              database.query("select * from  updatepassword('"+username+"','"+hash+"')", (err1, res1) => {
                if(err1)
                {
              //console.log(err)
              let output={"code":400,"message":err1.message}
              response.send(output)
                }
                else{
                  let output={"code":200,"message":"user password updated successfully"}
                  response.send(output)
                }
              });
            }
          })
            }
        }
      
         
        });
   
  
}










