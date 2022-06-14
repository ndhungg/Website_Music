const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');

const port = 3000;
const app = express();


//sử dụng template pug
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//cấu hình router người dùng
app.use('/users', userRouter);
app.use('/auth', authRouter);

//Lấy ra các file bên trong folder public
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index',{
    name:'Nguyễn Đình Hùng',
  });
});

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})