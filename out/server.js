"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// post body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './pages');
// const articles: Article[] = []
// app.get('/', (req, res) => {
//   res.render('index', { articles })
// })
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/service', (req, res) => {
    res.render('service');
});
app.get('/login', (req, res) => {
    res.render('login');
});
// app.post('/admin', (req, res) => {
//   let article: Article = req.body
//   articles.push(article)
//   res.send('nagap')
// })
app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});
