/**
 * Send an email via Node.js.
 * @author Andrew Jarombek
 * @since 1/26/2021
 */

const sendWelcomeEmail = require('./email');

const [_, __, to, firstName, lastName, username] = process.argv;

sendWelcomeEmail(to, firstName, lastName, username);
