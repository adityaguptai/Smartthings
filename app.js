var express = require('express')
    body = require('body-parser'),
    db = require('mongoose'),
    path = require('path'),
    cors = require('cors'), 
    app = express();

//Basic required code
app.use(body.urlencoded({extended:true}));
app.set('view engine','html');
app.use(body.json());    

//User Schema
var userSchema = db.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    phoneno: { type: Number, required: true },
    address: { type: String, required: true },
})

var posts = db.model("user", userSchema);

db.connect("mongodb://Aditya:aditya@ds111370.mlab.com:11370/database1");

db.connection.on('connected', () => {
    console.log('connected to database!!');
})

db.connection.on('error', (err) => {
    console.log('Error connecting to database!!');
})

app.use(express.static(path.join(__dirname, 'index')));
app.use(cors());

app.get("/users", (req,res) => {
    posts.find({}, (err,data) => {
        if (data) {
            console.log(data);
            res.json({ success: true, data:data });
        }
        else {
            console.log(err);
            res.json({ success: false});
        }
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index/index.html'));
});

app.post('/new', (req, res) => {
    console.log(req.body);
    
    posts.create(req.body, (err, post) => {
        if (err) res.json({ success: false, msg: "Some thing Went Wrong!" });
        if (!post) res.json({ success: false, msg: "Some thing Went Wrong!" });
        if (post) res.json({ success: true, msg: "Post saved" });
    })
});
// var userRoute = require('./Routes/user');
// var postRoute = require('./Routes/formdata');

// app.use('/user', userRoute);
// app.use('/post', postRoute);

app.listen('3000', () => {
   console.log("Server Started!!!");
});