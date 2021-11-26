const pool = require('../config/db.config');
const tableName = 'users'


this.getAllUsers = result => {

    pool.query("select * from users",(err,res)=>{
        console.log(err,res.rows)
        result(err,res.rows);
    })

}
this.addUser = (user, result) => {

    const values = [
    user.fname,
    user.lname,
    user.email,
    user.password,
    ]
    let sqlString = `
    INSERT INTO ${tableName}
    (fname, lname, email, password)
    VALUES
    ($1, $2, $3, $4) returning id` ;
    pool.query(sqlString, values, (err, res) => {
        if (err) {
        console.log('pool.query():', err)
        result(err,null);
        }
        
        if (res) {
        console.log('pool.query():', res)
        result(err,res.rows[0]);
        }
    })
}

this.updateUser = (id, user, result) => {
    const values = [
        user.fname,
        user.lname,
        user.email,
        user.password,
        id
        ]
        let sqlString = `
        UPDATE  ${tableName}
        SET fname = $1,
         lname = $2,
         email = $3,
         password = $4
        WHERE id = $5;`
        console.log(sqlString)
    pool.query(sqlString, values, (err, res) => {
        if (err) {
        console.log('pool.query():', err)
        result(err,null);
        }
        
        if (res) {
        console.log('pool.query():', res)
        result(err,res.rowCount);
        }
    })

}
this.deleteUser = (id, result) => {
    let sqlString = `
        DELETE FROM  ${tableName}
        
        WHERE id = $1; `
        pool.query(sqlString,[id] , (err, res) => {
            if (err) {
            console.log('pool.query():', err)
            result(err,null);
            }
            
            if (res) {
            console.log('pool.query():', res)
            result(err,id);
            }
        })

}
