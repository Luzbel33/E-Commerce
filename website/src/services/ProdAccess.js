const fs = require('fs')
const path = require('path');
const prodsFilePath = path.join(__dirname, '../data/database.json');

const getProds = () => {
    const prods = fs.readFileSync(prodsFilePath, 'utf8');
    const prodsJson = JSON.parse(prods);
    return prodsJson.prods;
};

module.exports = {
    getProds,
}