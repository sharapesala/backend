const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
res.write('Hey API am there!!!!')
res.end()
})

server.listen(port, function(error){
    if(error)
    {
        console.log('some thing went wrong', error)
            }else{
                console.log('listening to ' + port)
            }
})