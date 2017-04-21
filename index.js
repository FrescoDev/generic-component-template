process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV == 'development' ? module.exports = require('./__C_ACRONYM__.component/host/server') : module.exports = require('./build/__C_ACRONYM__.component/host/server');