/**
 * Send a welcome email to a new user.
 * @author Andrew Jarombek
 * @since 1/31/2021
 */

const send = require('aws-lambda-emails');

/**
 * Send a welcome email to a new user.
 * @param to Recipient email address.
 * @param firstName First name of the new user.
 * @param lastName Last name of the new user.
 * @param username Unique username of the new user.
 */
function sendWelcomeEmail(to, firstName, lastName, username) {
    const subject = "Welcome to SaintsXCTF";
    const attachments = [
        {
            filename: 'saintsxctf.png',
            path: './assets/saintsxctf.png',
            cid: 'saintsxctf@jarombek.com'
        }
    ];

    const htmlFilename="email";
    const cssFilename="email";

    const replacementValues = {
        firstName,
        lastName,
        username,
        prefix: process.env.PREFIX || ''
    };

    send(subject, to, attachments, htmlFilename, cssFilename, replacementValues);
}

module.exports = sendWelcomeEmail;
