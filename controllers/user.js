const User = require('../models/user');

exports.postUserDetails = async (req, res, next) => {
    try{
    const name = req.body.name;
    // console.log(name)
    const email = req.body.email;
    const phone = req.body.phone;
    const data = await User.create({name: name, email: email, phone: phone});
    res.status(201).json({newUserDetail: data});
    } catch(err){
        console.error("Error adding user:", err);
        res.status(500).json({
            error: err.message
            
        })
    }
}

exports.getUserDetails = async (req, res, next) => { 
    const users = await User.findAll();
    res.status(200).json({allUsers: users});
}

exports.deleteUserDetails = async (req, res, next) => {
    const userId = req.params.userId;
    await User.destroy({where: {id: userId}});
    res.sendStatus(204);
}