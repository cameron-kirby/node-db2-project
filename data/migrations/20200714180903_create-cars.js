
exports.up = function(knex) {
    // don't forget the return statement
    return knex.schema.createTable('cars', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('vin', 128).unique().notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.text('transmission', 128);
    tbl.text('title_status', 128);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
