/**
 * Send an activation code email upon admin request.
 * @author Andrew Jarombek
 * @since 1/26/2021
 */

const send = require('aws-lambda-emails');

/**
 * Send an activation code email upon admin request.
 * @param email Recipient email address.
 * @param code Activation code for a new user to join SaintsXCTF.
 */
function sendActivationCodeEmail(email, code) {
    const subject = "SaintsXCTF Password Reset Request";
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
        code,
        prefix: process.env.PREFIX || ''
    };

    send(subject, email, attachments, htmlFilename, cssFilename, replacementValues);
}

module.exports = sendActivationCodeEmail;
