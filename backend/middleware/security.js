'use strict';

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Helmet setup for securing HTTP headers
const securityMiddleware = (app) => {
    app.use(helmet());

    // Rate limiting middleware
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // Limit each IP to 100 requests per windowMs
    });

    app.use(limiter);
};

module.exports = securityMiddleware;
