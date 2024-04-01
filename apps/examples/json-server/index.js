const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(
  path.join(__dirname, '../mock-data/products.json')
);

router.render = (req, res) => {
  if (req.path === '/products') {
    res.jsonp({
      products: res.locals.data,
    });
  } else {
    res.jsonp(res.locals.data);
  }
};

const middlewares = jsonServer.defaults();

const PORT = 4000;

// cors enabled
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  next();
});

server.use(middlewares);

server.get('/api/error/:status', (req, res) => {
  const errors = {
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK_WITH_ERROR: 200,
    UNAUTHORIZED: 401,
  };

  const errorCode = errors[req.params.status] || errors.INTERNAL_SERVER_ERROR;

  res.status(errorCode).jsonp({
    errorCode: req.params.status || errors.INTERNAL_SERVER_ERROR,
    status: errorCode,
  });
});

server.use('/api', router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
