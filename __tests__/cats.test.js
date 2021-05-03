import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/cats', async () => {
  const expected = [
    {
      name: 'Felix',
      type: 'Tuxedo',
      url: 'cats/felix.png',
      year: 1892,
      lives: 3,
      isSidekick: false
    },
    {
      name: 'Garfield',
      type: 'Orange Tabby',
      url: 'cats/garfield.jpeg',
      year: 1978,
      lives: 7,
      isSidekick: false
    },
    {
      name: 'Duchess',
      type: 'Angora',
      url: 'cats/duchess.jpeg',
      year: 1970,
      lives: 9,
      isSidekick: false
    },
    {
      name: 'Stimpy',
      type: 'Manx',
      url: 'cats/stimpy.jpeg',
      year: 1990,
      lives: 1,
      isSidekick: true
    },
    {
      name: 'Sylvester',
      type: 'Tuxedo',
      url: 'cats/sylvester.jpeg',
      year: 1945,
      lives: 1,
      isSidekick: true
    },
    {
      name: 'Tigger',
      type: 'Orange Tabby',
      url: 'cats/tigger.jpeg',
      year: 1928,
      lives: 8,
      isSidekick: false
    },
    {
      name: 'Hello Kitty',
      type: 'Angora',
      url: 'cats/hello-kitty.jpeg',
      year: 1974,
      lives: 9,
      isSidekick: false
    },
    {
      name: 'Hobbs',
      type: 'Orange Tabby',
      url: 'cats/hobbs.jpeg',
      year: 1985,
      lives: 6,
      isSidekick: true
    }
  ];

  const response = await request.get('/api/cats');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});

it('GET /api/cats/1', async () => {
  const expected =
  {
    name: 'Felix',
    type: 'Tuxedo',
    url: 'cats/felix.png',
    year: 1892,
    lives: 3,
    isSidekick: false
  };
  const response = await request.get('/api/cats/1');

  expect(response.body).toEqual(expected);
  expect(response.status).toBe(200); // 200 = OK
});