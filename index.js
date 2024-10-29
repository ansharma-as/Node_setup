const express= require('express');

const app = express();

const users = [{
    name: 'john',
    kidneys : [{
        healthy : false
    }]
}];

app.get("/", function (req, res){
    const johnsKidneys = users[0].kidneys;
    const noOfKidneys = johnsKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i=0; i<johnsKidneys.length; i++){
        if (johnsKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = noOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        noOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

    console.log(johnsKidneys);
});

app.post("/",function(req,res){ 
    const isHealthy = req.query.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req,res){
    const newKindneys =[];
    for(let i=0 ;i < users[0].kidneys.length ; i++){
        if(users[0].kidneys[i].healthy){
            newKindneys.push({
                healthy :true
        })
    }
}
    users[0].kidneys = newKindneys;
    res.json({
        msg: "Done!"
    })
})
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
