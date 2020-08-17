var database = require('../config/database');

exports.createfood=function(request,response)
{
    let p_name=request.query.name;
    let p_cuisine=request.query.cuisine;
    let p_ingredients=request.query.ingredients;
    let p_lotnumber=request.query.lotnumber;
    let p_costofprod=request.query.costofprod;
    let p_sellingcost=request.query.sellingcost;
   // createfood(p_name character varying,p_cuisine character varying,p_ingredients character varying,p_lotnumber integer,p_costofprod float,p_sellingcost float) returns table(affectedrows1 integer,affectedrows text)
    database.query("select * from  createfood('"+p_name+"','"+p_cuisine+"','"+p_ingredients+"',"+p_lotnumber+","+p_costofprod+","+p_sellingcost+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Food Successfully inserted'}
            response.send(output)
        }
    });
}

exports.getallfoods=function(request,response)
{
    let foodid=request.query.foodid;
   // createfood(p_name character varying,p_cuisine character varying,p_ingredients character varying,p_lotnumber integer,p_costofprod float,p_sellingcost float) returns table(affectedrows1 integer,affectedrows text)
    database.query("select * from  getallfoods("+p_foodid+")", (err1, res1) => {
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


exports.updatefood=function(request,response)
{
    let foodid=request.query.foodid;
    let p_name=request.query.name;
    let p_cuisine=request.query.cuisine;
    let p_ingredients=request.query.ingredients;
    let p_lotnumber=request.query.lotnumber;
    let p_costofprod=request.query.costofprod;
    let p_sellingcost=request.query.sellingcost;
   // createfood(p_name character varying,p_cuisine character varying,p_ingredients character varying,p_lotnumber integer,p_costofprod float,p_sellingcost float) returns table(affectedrows1 integer,affectedrows text)
    database.query("select * from  updatefood("+foodid+",'"+p_name+"','"+p_cuisine+"','"+p_ingredients+"',"+p_lotnumber+","+p_costofprod+","+p_sellingcost+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Food Successfully inserted'}
            response.send(output)
        }
    });
}


exports.deletefood=function(request,response)
{
    let foodid=request.query.foodid;
    database.query("select * from  deletefood("+foodid+")", (err1, res1) => {
        if(err1)
        {
            let output={"code":400,"message":err1.message}
            response.send(output)
        }
        else{
            let output={"code":200,"message":'Food Successfully deleted'}
            response.send(output)
        }
    });
}

exports.food_sold_lost=function(request,response)
{
    let foodid=request.query.foodid;
   // createfood(p_name character varying,p_cuisine character varying,p_ingredients character varying,p_lotnumber integer,p_costofprod float,p_sellingcost float) returns table(affectedrows1 integer,affectedrows text)
    database.query("select * from  getfood_sold_lost()", (err1, res1) => {
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


