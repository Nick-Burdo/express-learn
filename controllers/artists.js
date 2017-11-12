const Artists = require('../models/artists');

exports.all = (req, res) => {
	Artists.all((err, result) => {
		if (err) {
			console.log(err);
      return res.sendStatus(500);
		}
		res.send(result);
	})
};

exports.create = (req, res) => {
	Artists.create({name: req.body.name}, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
	});
}

exports.read = (req, res) => {
	Artists.read(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  });
};

exports.update = (req, res) => {
	Artists.update(req.params.id, {name: req.body.name}, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  });
};

exports.delete = (req, res) => {
	Artists.delete(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  });
};
