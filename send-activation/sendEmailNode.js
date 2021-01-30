/**
 * Send an email via Node.js.
 * @author Andrew Jarombek
 * @since 1/26/2021
 */

const sendActivationCodeEmail = require('./email');

const [_, __, email, code] = process.argv;

sendActivationCodeEmail(email, code);
