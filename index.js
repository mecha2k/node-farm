const fs = require("fs")
const http = require("http")
const url = require("url")
const slugify = require("slugify")

const replaceTemplate = require("./src/replaceTemplate")

const indexTemplate = fs.readFileSync("./src/index.html", "UTF-8")
const cardTemplate = fs.readFileSync("./src/card.html", "UTF-8")
const productTemplate = fs.readFileSync("./src/product.html", "UTF-8")

const data = fs.readFileSync(`${__dirname}/data.json`, "UTF-8")
const dataObj = JSON.parse(data)

const slugs = dataObj.map((data) => slugify(data.productName, { lower: true }))
console.log(slugs)

const server = http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true)

  if (reqUrl.pathname === "/" || reqUrl.pathname === "/index") {
    res.writeHead(200, { "Content-type": "text/html" })

    const cardsHtml = dataObj.map((data) => replaceTemplate(data, cardTemplate))
    const output = indexTemplate.replace("{PRODUCT_CARDS}", cardsHtml)
    res.end(output)
  } else if (reqUrl.pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" })
    const product = dataObj[reqUrl.query.id]
    const output = replaceTemplate(product, productTemplate)
    res.end(output)
  } else if (reqUrl.pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" })
    res.end(data)
  } else {
    res.writeHead(404, { "Content-type": "text/html", "my-own-header": "hello-world" })
    res.end("<h1>Page not found</h1>")
  }
})

server.listen(5000, "localhost", function () {
  console.log("Listening to requests on port 5000")
})
