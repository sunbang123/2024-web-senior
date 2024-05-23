const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs') // ejs를 불러오는거임. pug라면 'ejs'부분이 'pug' 이렇게 작성됨.
app.use(express.static('public'))

app.get('/example1', (req, res) => {
  res.render('index', {name: '차은우리나라'})
});

app.get('/example2', (req, res) => {
  res.render('index', {name: '이재명명백백'})
});

app.get('/example3', (req, res) => {
  res.render('index', {name: '박종진진자라'})
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/2', (req, res) => {
//     res.send('안녕!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
