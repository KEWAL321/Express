const express = require("express");
const app = express();
// console.dir(app); 

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
// console.log("request received");
// console.log(req);
// res.send({
//     name: "kewal",
//     height: 5.8,
// });
// });

//////////////////////////////////////
// app.get("/", (req, res) => {
//     res.send("you called a root path");
// })
// app.get("/lado", (req, res) => {
//     res.send("you called lado path");
// })
// app.get("/kra", (req, res) => {
//     res.send("you called kra path");
// })
// app.get("*", (req, res) => {
//     res.send("This path doesnot exists");
// })
// app.post("/", (req, res) => {
//     res.send("This path doesnot exists");
// })
///////////////////////////////////////

// app.get("/:username/:id", (req, res) => {
//     // console.log(req.params);
//     let { username, id } = req.params;
//     res.send(`the username is ${username} and id is ${id}`);
// });
////////////////////////////////////////

app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    if (!q) {
        res.send("<h1>query not entered</h1>");
    }
    res.send(`<h1>search result for ${q}</h1>`);
});