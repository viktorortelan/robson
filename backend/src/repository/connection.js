import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.HT,
    user: process.env.US,
    password: process.env.PWSD,
    database: process.env.BD,
    typeCast: function (field, next) {
        if(field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1');
        }
        else if(field.type.includes('DECIMAL')) {
            return Number(field.string());
        }
        else {
            return next();
        }
    } 
});

console.log(`api conectada com ${process.env.BD}`);

export default con;