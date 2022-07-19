import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//const path = require('./routes/api/items')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//const port = process.env.PORT || 9002;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/wartegin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connect to wartegin database")
})

//user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const User = new mongoose.model("User", userSchema)

//pesanan
const pesananSchema = new mongoose.Schema({
    email: String,
    pesan: String
})
const Pesanan = new mongoose.model("Pesanan", pesananSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Berhasil login ke akun anda.", user: user})
            } else {
                res.send({ message: "Masukkan password dengan benar."})
            }
        } else {
            res.send({message: "Akun tidak terdaftar, silahkan klik oke dan Register."})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "Email atau akun sudah terdaftar"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Berhasil Terdaftar, Silahkan login sekarang." })
                }
            })
        }
    })
    
}) 

app.post("/pesanan", (req, res)=> {
    const { email, pesan} = req.body
    Pesanan.findOne({ email, pesan}, (err, pesanan) => {
        if(pesanan){
            res.send({message: "Terimakasih sudah memesan menu di WARTEGIN"})
        }
    })
}) 

//app.use('/api/items', items);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(process.env.PORT || 9002, function() {
    //console.log("Server Running at port: ", port)
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})
