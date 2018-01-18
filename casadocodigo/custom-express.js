const express = require('express')

module.exports = () => {
    const app = express()

    app.set('view engine','ejs')

    require('./routes/produtos')(app)

    return app
}