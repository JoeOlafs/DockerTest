const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json ([{
  name: 'Bob',
  email: 'bob@builder.com'
},
{
     name: 'Alice',
     email: 'alice@gmail.com'
},
{
     name: 'Jake',
     email: 'jake@john.com'
},
{
     name: 'maria',
     email: 'maria@gmail.com'
}]))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})