const db = require("../../models");
const profile = db.profile;
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  profile.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      messege : err.messege || "Something Went Wrong"
    });
  });
};

exports.userBoard = async (req, res) => {
  User.findOne(
    {
      user_id: req.user_id,
      attributes: {exclude: ['password','createdAt','email']},
      include:[
        {
          model: db.profile
        }
      ],
    },
  ).then(user => {
      res.status(200).send({
      data: user,
    });
  }).catch(err => {
        res.status(500).send({
          messege : err.messege || "Something Went Wrong"
      });
  });
  // res.send(req.user_id)
};


exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};