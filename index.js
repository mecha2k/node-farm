const http = require("http")

const server = http.createServer(function(req, res) {
  res.end("Hello from the server")
})

server.listen(5000, "localhost", function() {
  console.log("Listening to requests on port 5000")
})
