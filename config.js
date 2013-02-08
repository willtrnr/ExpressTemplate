module.exports = {
  title    : 'Template',
  prefix   : '',
  secret   : process.env.SECRET || 'T3MPL4T3',
  salt     : process.env.SALT || 'T3MPL4T3',
  host     : process.env.DOMAIN || 'localhost',
  listen   : '0.0.0.0',
  port     : Number(process.env.PORT) || ((process.env.NODE_ENV == 'production') ? 80 : 3000),
  mongodb: {
    url    : process.env.MONGODB,
    db     : 'template'
  }
};
