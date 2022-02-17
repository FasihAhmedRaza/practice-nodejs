const path = require('path');

const filename =path.join(__filename);//hmm dono ppath ko join karwa saktee haa
const basename = path.basename(filename);
const extname  = path.extname(basename);


console.log(filename);
console.log(basename); 
console.log(extname);
