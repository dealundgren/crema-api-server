const supertest = require('supertest');
const app = require('../');

const server = supertest(app);

describe('Users', function () {
  let url = '/v1/users/currentuser';

  describe('GET /currentuser', function () {

    it('should return current user if logged in', function (done) {
      done(); // TODO: write test after auth is implemented
    });

    it('should return status 401 if user is not logged in', function (done) {
      server
        .get(url)
        .expect(401, done);
    });
  });

});
