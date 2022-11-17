const dotenv = require('dotenv')
dotenv.config()

const config = {
    PORT : process.env.PORT || 3002,
    MONGODB_URI: process.env.MONGODB_URI,

}
module.exports = config
