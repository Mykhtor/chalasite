import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'


const app = express()


app.use(express.static(path.join(__dirname, '../public')))
// post body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine( { extname: '.hbs' } ))
app.set('view engine', '.hbs')
app.set('views', './pages')


// const articles: Article[] = []

// app.get('/', (req, res) => {
//   res.render('index', { articles })
// })

app.get('/home', (req, res) => {
    res.render('home')
  })

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/service', (req, res) => {
  res.render('service')
})

app.get('/login', (req, res) => {
  res.render('login')
})

// app.post('/admin', (req, res) => {
  
//   let article: Article = req.body
//   articles.push(article)

//   res.send('nagap')
// })



app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
})