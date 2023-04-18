const fs = require('fs')
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/Users.json');

const getUsers = () => {
    const users = fs.readFileSync(usersFilePath, 'utf8');
    const usersJson = JSON.parse(users);
    return usersJson.users;
};

const findUserByMail = (email) => {
    const users = getUsers();
    const index = users.findIndex((user) => user.email === email);
    return users[index];
   
};

const writeUser = (users) => {
userJson = JSON.stringify({ users }, null, 2);
fs.writeFileSync(path.join(__dirname, '../data/Users.json'), userJson, 'utf8', function (err){
    if(err) {
        return console.log(err);
    }
});
};

module.exports = {
    getUsers,
    findUserByMail,
    writeUser
}