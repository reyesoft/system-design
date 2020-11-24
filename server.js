const express = require('express');
const path = require('path');

const app = express();

const distFolder = path.join(process.cwd(), 'dist/system-design-saldo');

app.use(express.static(path.join(process.cwd(), 'dist/system-design-saldo')));
app.get('/*',function(req,res){
    res.sendFile('index.html', {
      root: 'dist/system-design-saldo'
    })
});

app.listen(process.env.PORT || 8080);
