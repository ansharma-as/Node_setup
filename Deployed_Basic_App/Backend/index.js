import express from 'express';

const app = express();

const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

app.get('/login', (req,res) =>{
    res.send("you can now login to this website");
});

app.get("/api/jokes", (req,res) => {
    const jokes = [{
        id: 1,
        title: "Why was the tomato always so angry?", 
        content: "It saw the salad dressing!"
    },
    {
        id: 2,
        title: "Why did the scarecrow win an award?",
        content: "He was outstanding in his field of lore."
    },
    {
        id: 3,
        title: "Why did the chicken cross the road?",
        content: "To get to the other side!"
    },{
        id: 2,
        title: "Why don't eggs tell jokes?",
        content: "Because they might crack up!"
    },
    {
        id: 3,
        title: "Why was the math book sad?",
        content: "It had too many problems."
        },
    {
        id: 4,
        title: "Why did the scarecrow win an award?",
        content: "Because he was outstanding in his field!"
    },
    {
        id: 5,
        title: "Why don't skeletons fight each other?",
        content: "They don't have the guts."
    },
    {
        id: 6,
        title: "Why did the bicycle fall over?",
        content: "Because it was two-tired!"
}];

    res.json({
        jokes
    })
    })



app.listen(port , () => {
    console.log('server running on port '+ port);
});