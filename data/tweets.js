const {users} = require('./users');
const {stats} = require('./stats');

const tweets = [
    {
        id:"T001",
        body:"This is a sample tweet T001",
        date:"2022-01-07",
        Author:users[0],
        Stats:stats[0]

    },
    {
        id:"T002",
        body:"This is a sample tweet T002",
        date:"2022-02-22",
        Author:users[1],
        Stats:stats[1]

    },
    {
        id:"T003",
        body:"This is a sample tweet T003",
        date:"2022-03-17",
        Author:users[2],
        Stats:stats[2]

    },

];

module.exports = {tweets};