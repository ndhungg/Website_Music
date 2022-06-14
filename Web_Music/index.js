const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');

const port = 3000;

const app = express();


//sử dụng template pug
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//cấu hình router người dùng
app.use('/users', userRouter);


app.get('/', (req, res) => {
  res.render('index',{
    name:'Nguyễn Đình Hùng',
  });
});



app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})