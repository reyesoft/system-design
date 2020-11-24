import * as express from 'express';
import { join } from 'path';

const app = express();

app.use(express.static(__dirname+'/dist/system-design-saldo'));
app.get('/',function(req,res){
    res.sendFile(join(__dirname+'/dist/system-design-saldo'));
});
