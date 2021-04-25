/**
 * Send an email via Node.js.
 * @author Andrew Jarombek
 * @since 4/24/2021
 */

const sendReportEmail = require('./email');

const [_, __, firstName, lastName, report] = process.argv;

sendReportEmail(firstName, lastName, report);
