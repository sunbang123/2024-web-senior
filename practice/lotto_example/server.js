const express = require("express");
const { createHmac } = require("node:crypto");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.disable("x-powered-by");

app.post("/login", (req, res) => {
    console.log(req.body);
    // const email = req.body.email;
    // const password = req.body.password;

    const {email, password} = req.body;

    // hash 암호화 알고리즘임~!
    const secret = '123';
    const hash = createHmac('sha256', secret)
        .update(password)
        .digest('hex')
    
    console.log(hash);

    // 정보가 일치하면
    if (email === "aaa@aaa.com" && hash === "c1771ad95972ef1ab887140489863ede4faad7458441a3a8a4781454e368b52d") {
        res.json({result: 'success'});
    } else {
        res.json({result: 'fail'});
    }
    // res.json({result: 'fail'})
})

app.listen(port, () => {
    
    console.log(`Example app listrening on port ${port}`);
})