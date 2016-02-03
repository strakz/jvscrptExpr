var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

//tu som pridal komentar a idem to comitnut
app.listen(process.argv[2])