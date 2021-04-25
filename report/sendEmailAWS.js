/**
 * Send an email via an AWS Lambda function
 * @author Andrew Jarombek
 * @since 4/24/2021
 */

const AWS = require('aws-sdk');
const sendReportEmail = require('./email');

AWS.config.update({region: 'us-east-1'});

/**
 * Invoke an AWS function via the handler object
 * @param event - information about the AWS Lambda function request
 * @param context - runtime information regarding the AWS lambda function
 * @param callback - used to return information back to the caller.
 */
exports.sendReportEmail = (event, context, callback) => {
    try {
        sendReportEmail(event.firstName, event.lastName, event.report);
        callback(null, true);
    } catch (err) {
        console.error(err);
        callback(Error(err), false);
    }
};
