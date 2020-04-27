NODE FARM
===

Program Structure
---

### `Node.js`

### Node.js server 
1. Create server with http module
2. Descrive server actions with 'request'
3. Send 'response' action

<pre>
<code>
const server = http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true)

  if (reqUrl.pathname === "/" || reqUrl.pathname === "/index") {
    res.writeHead(200, { "Content-type": "text/html" })

    const cardsHtml = dataObj.map((data) => replaceTemplate(data, cardTemplate))
    const output = indexTemplate.replace("{PRODUCT_CARDS}", cardsHtml)
    res.end(output)
  }
})

server.listen(5000, "localhost", function () {
  console.log("Listening to requests on port 5000")
})
</code>
</pre>

#### HTML template : index, card, product.html
1. read html template files
2. replace data according to each template keywords: eg. {PRICE}

<pre>
<code>
const indexTemplate = fs.readFileSync("./src/index.html", "UTF-8")
const cardTemplate = fs.readFileSync("./src/card.html", "UTF-8")
const productTemplate = fs.readFileSync("./src/product.html", "UTF-8")
</code>
</pre>

#### That's it!