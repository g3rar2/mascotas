import express from 'express';
import usuarioRoutes  from "./routes/usuarioRoutes.js";
import db from "./config/db.js";


const app = express();


app.use(express.urlencoded({ extended: true }));



try {
db.authenticate();
console.log("Connected to database");
}catch(error) {
console.log(error);
}




const port = 3000;
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.use('/auth', usuarioRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
