import db from "../models/index.js";

const Primate = db.primate;
const Tutorial = db.tutorials;
// Create and Save a new Tutorial

export function create(req, res) {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const primate = new Primate({
    name: req.body.name,
    type: req.body.type,
  });
  // Save Tutorial in the database
  primate
    .save(primate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
}

// Find all published Tutorials
export function findAllType(req, res) {
  Primate.find({ type: req.body.type })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
}

/* // Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};*/
