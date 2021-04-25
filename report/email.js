/**
 * Send a report email to a new user.
 * @author Andrew Jarombek
 * @since 4/25/2021
 */

const send = require('aws-lambda-emails');

/**
 * Send a report email.
 * @param firstName First name of a user.
 * @param lastName Last name of a user.
 * @param report Report/feedback that the user wrote.
 */
function sendReportEmail(firstName, lastName, report) {
    const to = 'andrew@jarombek.com';
    const subject = `${firstName} ${lastName} SaintsXCTF Report`;
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
        report,
        prefix: process.env.PREFIX || ''
    };

    send(subject, to, attachments, htmlFilename, cssFilename, replacementValues);
}

module.exports = sendReportEmail;
