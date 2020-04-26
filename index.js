const fs = require("fs")
const http = require("http")
const url = require("url")
const replaceTemplate = require("./src/replaceTemplate")

const index = fs.readFileSync("./src/index.html", "UTF-8")
const cards = fs.readFileSync("./src/card.html", "UTF-8")
const products = fs.readFileSync("./src/product.html", "UTF-8")

const data = fs.readFileSync(`${__dirname}/data.json`, "UTF-8")
const dataObj = JSON.parse(data)

const server = http.createServer(function(req, res) {
  const urlReq = req.url
  if (urlReq === "/" || urlReq === "/index") {
    res.writeHead(200, { "Content-type": "text/html" })

    const cardsHtml = dataObj.map((element) => replaceTemplate(cards, element))
    const output = index.replace("{%PRODUCT_CARDS%}", cardsHtml)
    res.end(output)
  } else if (urlReq === "/product") {
    res.end("This is the product")
  } else if (urlReq === "/api") {
    res.writeHead(200, { "Content-type": "application/json" })
    res.end(data)
  } else {
    res.writeHead(404, { "Content-type": "text/html", "my-own-header": "hello-world" })
    res.end("<h1>Page not found</h1>")
  }
})

server.listen(5000, "localhost", function() {
  console.log("Listening to requests on port 5000")
})
