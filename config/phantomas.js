/**
 * Performance reports with grunt-phantomas
 */
'use strict';

var config = require('../../config');

module.exports = {
	test: {
        options: {
            indexPath: config.phantomas.reports,
            numberOfRuns: 10,
            options: {
                'timeout': 30 // abort loading of resources after 30secs
            },
            url: 'http://localhost:9001/'
        }
    }
};
