const {Pool, Client} = require('pg');

const pool = new Pool({
  host:"localhost",
  port:5432,
  user:"postgres",
  password:"root",
  database:"Crud"
})

// client.on("connect",()=>{
// console.log("Database Connection Successfull");
// })

// client.on("end",()=>{
//   console.log("Database Connection Ended");
// })
module.exports = pool;