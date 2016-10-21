var express = require('express')
var app = express()
var http = require('http')
var multer  = require('multer')
var upload = multer({ dest: 'tmp/' })


app.use(express.static(__dirname+"/public"))


/******** ROUTER ********/
app.get('/', function(req, res){
	res.sendFile(__dirname+"/upload.html")
});

app.post('/upload', upload.single('pic'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log("req.file: "+req.file)
  console.log(req.file)
  res.json({upload: "OK"})
})
/******** ROUTER ********/


/********* SERVERs ***********/

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
