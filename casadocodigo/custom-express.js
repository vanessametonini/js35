module.exports = () => {
    const express = require('express'),
          app = express()

    app.set('view engine','ejs')

    app.use(
        '/static',
        express.static('./node_modules/bootstrap/dist/')
    )

    require('./routes/produtos')(app)

    return app
}