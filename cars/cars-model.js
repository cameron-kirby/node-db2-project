const knex = require('knex');

const db = require("../data/connection.js")

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('cars');
}

function getById(id) {
  return db('cars')
    .where({ id })
    .first();
}

function insert(car) {
  return db('cars')
    .insert(car)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('cars')
    .where({ id })
    .update(changes)
    .then(() => {
      return getById(id);
    });
}

function remove(id) {
  return db('cars')
    .where('id', id)
    .del();
}