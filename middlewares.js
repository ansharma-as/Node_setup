const express= require ("express");

const  app = express();
//we dont want to repeat logic so we use function calls(using middlewares)
app.get("/health-checkup",function (req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const KindnyId = req.query.KindnyId;
    res.send("completed its first check!")
});
    
//     if(username != "Strontium" || password != "pass"){
//         res.status(401).json({msg: "Unauthorized"});
//         return;
//     }

//     if (KindnyId != 1 && KindnyId != 2){
//         res.status(400).json({msg: "Invalid KindneyId"});
//         return;
//     }

//     res.json({msg: "Health Checkup Successful", kindnyId: KindnyId});

// })

// app.listen(3000, function(){
//     console.log("Server is running on port 3000");
// })

// using middlewares to handle logic repettion
    

function usermiddlewares(req,res, next){
    if( username!="Strontium" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect username or password"
        });
    }
    else{
            next();
    }
};

function useKidneymiddleware(req,res,  next){
    if( KidneyId!=1 && KidneyId!=2 ){
        res.status(400).json({
            msg: "Invalid KindneyId"
        });
    }
}

app.get("/health-checkup", usermiddlewares, useKidneymiddleware, function (req,res){
    //do something with your logic here

    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;

    res.json({msg: "Health Checkup Successful", KidneyId: req.query.KidneyId});
});

app.get("/Kidney-check", function(req,res , next){
    //do something with your logic here

    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;

    res.json({msg: "Kidney Check Successful", kidneyId: req.query.KidneyId});
})

app.get("/heart-checkup", function(req,res,next){
    //do something with your logic here

    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;

    res.json({msg: "Heart Checkup Successful", kidneyId: req.query.KidneyId});
});


//global catches
app.use(function(err, req, res, next){
    //do something with your error logic
    res.send("Something is wrong with our server")

})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});