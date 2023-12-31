const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('oke telah berhasil mengakses server')
})
app.get('/api', (req, res){
    res.send('polah');
})
app.listen(port, () => {
   console.log(`server berjalan di port ${port}`);
})
