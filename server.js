const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan'),
      cookieParser = require('cookie-parser'),
      session = require('express-session');

require('dotenv').config();

const webSocket = require('./socket');
const { sequelize } = require('./models');

const app = express();

const sessionMiddleware = session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
});

sequelize.sync();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

// router
const authRouter = require('./routes/auth'),
      roomRouter = require('./routes/room');

app.use('/auth', authRouter);
app.use('/room', roomRouter);

// 404 error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// 500 server error handling
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

webSocket(server, app, sessionMiddleware);
