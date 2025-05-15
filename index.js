import express from 'express';
import usuarioRoutes  from "./routes/usuarioRoutes.js";
const app = express();
const port = 3000;
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.use('/auth', usuarioRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
