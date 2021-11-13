'use strict'

const User = require('../model/user.js')

const getallUsers = () => {
  const users = User.find();
  return users;
}

const createUser = async (req, res) => {
    try{

    }
}