// Creating different Schemas
//email: string => email
//password: atleast 8 characters
//country: IN,  US

const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());
function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8)
    })

    return schema.safeParse(obj);
}

validateInput({
    email: "test@gmail.com",
    password: "pass123jjdjdj"
});


app.post("/login", function(req, res) {
    const response = validateInput(req.body);
    if(!response.success){
        res.status(411).json({
            msg: "Invalid inputs!"
        })
        return;
    }
    else{
        res.json({
            msg: "Logged in successfully!"
        })
    }
});

app.listen(6000, function() {
    console.log("Server is running on port 3000");
});

// const express = require("express");
// const zod = require("zod");
// const app = express();

// app.use(express.json());

// function validateInput(obj) {
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8)
//     });

//     // Return the validation result
//     return schema.safeParse(obj);
// }

// // Test the validation function (this will run once when the server starts)
// validateInput({
//     email: "test@gmail.com",
//     password: "pass123jjdjdj"
// });

// app.post("/login", function(req, res) {
//     const response = validateInput(req.body);
//     if (!response.success) { // Check 'success' property
//         res.status(411).json({
//             msg: "Invalid inputs!"
//         });
//     } else {
//         res.json({
//             msg: "Logged in successfully!"
//         });
//     }
// });

// app.listen(6000, function() {
//     console.log("Server is running on port 6000"); // Correct port number
// });
