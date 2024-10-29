const express = require("express");
const zod = require("zod");

const router = express();

const schema = zod.array(zod.number());

router.use(express.json());

router.post("/health-checkup", function(req, res){
    //kindneys=[1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg:"Invalid inputs!"
        })
    }else{
        
    res.send({
        response
    })
    }
});

router.listen(6000, function(){
    console.log("this port is running on port 6000");
})