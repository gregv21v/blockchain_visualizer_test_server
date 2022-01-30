const Blockchain = require("./Blockchain.js")
const Block = require("./Block")
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 5000;

const app = express()

app.use(cors());

const coin = new Blockchain()

coin.addBlock(new Block(1, "1/7/21", { amount: 1 }))
coin.addBlock(new Block(2, "1/6/21", { amount: 2 }))
coin.addBlock(new Block(3, "1/5/21", { amount: 3 }))


app.get("/coin", (_request, response) => {
    response.send(coin)
})


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})


