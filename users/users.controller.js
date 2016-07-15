module.exports = {
  getCurrentUser
};

/***** PUBLIC *****/

function getCurrentUser(req, res) {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(401).send({message: 'user is not authenticated'});
  }
}

