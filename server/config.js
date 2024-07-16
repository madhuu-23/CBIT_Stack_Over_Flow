module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://admin:admin@cluster0.fdqnpgi.mongodb.net/CBIT-StackOverflow?retryWrites=true&w=majority',
    test: 'mongodb+srv://admin:admin@cluster0.fdqnpgi.mongodb.net/CBIT-StackOverflow?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
