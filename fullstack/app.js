let express = require('express');
let app = express();
let port = 8811;
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

//static file path
app.use(express.static(__dirname+'/public'))
//html/ejs file path
app.set('views','./src/views')
// view engine name
app.set('view engine','ejs')

//Default route
app.get('/',function(req,res){
    //res.send('Hii From Default Server')
    res.render('index',{title:'Home Page'})
})

app.use('/category',categoryRouter)
app.use('/products',productRouter)

// creating server
app.listen(port, function(err){
    if(err) throw err;
    console.log('Running on port 8811')
})