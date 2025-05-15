import express from "express";

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hola desde get en express")
})

router.post('/', (req, res) => {
    res.send("Hola desde get en express")
})


export default router;