import express from 'express';
const app = express();
const port:number = 3000

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})