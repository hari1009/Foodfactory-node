var database = require('../config/database');
exports.create=function(request,response)
{
    let p_availableq=request.query.availableq;
    let p_threshold=request.query.threshold;
    let p_price=request.query.price;
    let p_vendorname=request.query.vendorname;
    let p_vendoremail=request.query.vendoremail;
    let p_lotnumber=request.query.lotnumber;
    let ingredientname=request.query.name;
    database.query("select * from  insertingredients('"+ingredientname+"',"+p_lotnumber+","+p_availableq+","+p_threshold+","+p_price+",'"+p_vendorname+"','"+p_vendoremail+"')", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Ingredients Successfully inserted'}
            response.send(output)
        }
    });
}

exports.update=function(request,response)
{
    let p_availableq=request.query.availableq;
    let p_threshold=request.query.threshold;
    let p_price=request.query.price;
    let p_vendorname=request.query.vendorname;
    let p_vendoremail=request.query.vendoremail;
    let p_ingredientid=request.query.ingredientid;
    let p_lotnumber=request.query.lotnumber;
    database.query("select * from  updateingredients("+p_ingredientid+","+p_availableq+","+p_threshold+","+p_price+",'"+p_vendorname+"','"+p_vendoremail+"',"+p_lotnumber+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Ingredients Successfully inserted'}
            response.send(output)
        }
    });
}


exports.delete=function(request,response)
{
   
    let p_ingredientid=request.query.ingredientid;
    database.query("select * from  deleteingredients("+p_ingredientid+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Ingredients Successfully deleted'}
            response.send(output)
        }
    });
}

exports.getingredients=function(request,response)
{
    
    let p_ingredientid=request.query.ingredientid;
    database.query("select * from  getallingredients("+p_ingredientid+")", (err1, res1) => {
         if(err1)
         {
             let output={"code":400,"message":err1.message,"data":[]}
             response.send(output)
         }
         else{
             let output={"code":200,"message":'',"data":res1.rows}
             response.send(output)
         }
     });
}

exports.getingrediends_less_quantity=function(request,response)
{
     database.query("select * from  getingrediends_less_quantity()", (err1, res1) => {
         if(err1)
         {
             let output={"code":400,"message":err1.message,"data":[]}
             response.send(output)
         }
         else{
             let output={"code":200,"message":'',"data":res1.rows}
             response.send(output)
         }
     });
}


exports.getingrediends_vendor=function(request,response)
{
    let vendor=request.query.vendoremail;
     database.query("select * from  getingrediends_vendor('"+vendor+"')", (err1, res1) => {
         if(err1)
         {
             let output={"code":400,"message":err1.message,"data":[]}
             response.send(output)
         }
         else{
             let output={"code":200,"message":'',"data":res1.rows}
             response.send(output)
         }
     });
}