const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    
        User.getAllUsers((err,data)=>{
            if (err) {
                res.sendStatus(500)
              }else{
                console.log(data)
            res.send(data);
              }
            
        })
};
exports.addUser = (req, res) => {
    console.log(req.body)
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    User.addUser(req.body, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

  exports.updateUser = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    User.updateUser(req.params.id, req.body, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.sendStatus(200);
    });
  };

  exports.deleteUser = (req, res) => {
    
    User.deleteUser(req.params.id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting the User."
        });
      else res.send(data);
    });
  }; 