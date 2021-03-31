const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const { checkAuth } = require('./middlewares/check-auth');
const { sendMail } = require('./outils/mail');
require('./outils/cronReports'); // Cron Reports
require('dotenv').config();

// Init express
const app = express();

// Connect to MongoDB.
connectDB();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Middlewares
app.disable('x-powered-by');
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(__dirname + '/'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/img', checkAuth, require('./routes/uploadImgRoutes'));
app.use('/api/images', require('./routes/imageRoutes'));
app.use('/api/post', require('./routes/postRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// Send email contact
app.post('/send-about-coin', async (req, res) => {
  const { email, name, message } = req.body;
  await sendMail(email, name, message, res);
});

// error handler
// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
// });

if (process.env.NODE_ENV === 'production') {
  console.log('Mode Production is runnig...');

  app.use(express.static(path.join(__dirname, '/build')));

  app.get('*', (req, res) => {
    console.log('zlekjflke');
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('API IS RUNNING...'));
}

module.exports = app;
