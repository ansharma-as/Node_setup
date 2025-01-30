const express = require('express');
const app = express();

function calculateSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', function(req, res) {
    const n = parseInt(req.query.n);
    if (!isNaN(n)) {
        const ans = calculateSum(n);
        res.send(`Sum of numbers from 1 to ${n} is ${ans}`);
    } else {
        res.send('Please provide a valid number');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
