class UserController {
  async index(req, res) {
    res.send("index users");
  }

  async create(req, res) {
    console.log(req.body);
    res.send("corpo da req");
  }
}

module.exports = new UserController();
