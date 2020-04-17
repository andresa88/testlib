

const fs = require('fs');

fs.writeFileSync('../prepack-out.txt', 'prepack');
fs.writeFileSync('../prepack-inc.txt', 'prepack');
console.log('prepack');