const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('file.json')
const middlewares = jsonServer.defaults()
var cors = require("cors");

server.use(cors());
server.use(middlewares)

server.use(router)

// router.render = function (req, res) {
//     res.setHeader('X-SOME-HEADER', '...') 
//     res.jsonp(res.locals.data)
//   }


server.listen(3000, () => {
  console.log('JSON Server is running')
})