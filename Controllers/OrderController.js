var database = require('../config/database');

exports.create=function(request,response)
{
    let p_delivery_date=request.query.delivery_date;
    let p_mode=request.query.mode;
    let p_orderedby=request.query.orderedby;
    let p_items=request.query.items;
     database.query("select * from  createorder('"+p_delivery_date+"','"+p_mode+"',"+p_orderedby+",'"+p_items+"')", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Order Successfully inserted'}
            response.send(output)
        }
    });
}

exports.update=function(request,response)
{
    let p_delivery_date=request.query.delivery_date;
    let p_mode=request.query.mode;
    let p_orderedby=request.query.orderedby;
    let p_items=request.query.items;
    let p_status=request.query.status;
    let p_orderid=request.query.orderid;
     database.query("select * from  updateorder("+p_orderid+",'"+p_status+"','"+p_delivery_date+"','"+p_mode+"',"+p_orderedby+",'"+p_items+"')", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Order Successfully inserted'}
            response.send(output)
        }
    });
}

exports.delete=function(request,response)
{
    let p_orderid=request.query.orderid;
     database.query("select * from  deleteorder("+p_orderid+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Order Successfully inserted'}
            response.send(output)
        }
    });
}

exports.getorder=function(request,response)
{
    let p_orderid=request.query.orderid;
     database.query("select * from  getorder("+p_orderid+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Order Successfully inserted'}
            response.send(output)
        }
    });
}

exports.getorderbaseduser=function(request,response)
{
    let p_userid=request.query.userid;
    database.query("select * from  getorderbaseduser("+p_userid+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Order Successfully inserted'}
            response.send(output)
        }
    });
}