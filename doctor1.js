const express = require('express');

function calculateSum(a, b) {
    return a + b;
}

const app = express();
const port = 3001;

app.get('/', function(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid input. Please provide numbers for a and b.');
    } else {
        const ans = calculateSum(a, b);
        res.send(`The sum of ${a} and ${b} is ${ans}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
