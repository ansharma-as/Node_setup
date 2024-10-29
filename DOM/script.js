const express=require("express");
const app = express();

app.get("/sum", function(req, res){
    const firstNumber=(parseInt(req.query.firstNumber) );
    const secondNumber= (parseInt(req.query.secondNumber));
    const sum = firstNumber + secondNumber;
    res.send(sum.toString());
});
app.listen(8000);