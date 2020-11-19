import express from 'express';

const app = express();
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`Servertouch instance is running on ${port}`)
})
