const faker = require("faker");

const createFakeUser = () => ({
  email: faker.internet.email(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName()
});

exports.seed = async function(knex, Promise) {
  const fakeUsers = []
  const amountFakeUsers = 1000;

  for (let i = 0; i < amountFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return await knex('users').del()
    .then(function() {
      return knex("users").insert(fakeUsers);
    });
};
