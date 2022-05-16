const express = require('express')
const path = require('path')
const app = express()
const port  = 3000
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')

//ORIGINAL
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/tabuada', tabuadaRouter)

app.listen(port, ()=> console.log(`tabuada server na porta ${port} 🏆`))