/**
 * Upload a user's profile picture to an AWS S3 bucket.
 * @author Andrew Jarombek
 * @since 11/21/2020
 */

const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

const s3 = new AWS.S3();

exports.upload = async (event) => {
    const env = process.env.ENV;
    const body = Buffer.from(event.base64Image, 'base64')

    try {
        await s3.putObject({
           Bucket: 'uasset.saintsxctf.com',
            Key: `${env}/${event.username}/${event.fileName}`,
            Body: body,
            Metadata: {}
        });
        return true;
    } catch (e) {
        console.info(`Failed to upload ${event.fileName}`);
        console.error(e);
        return false;
    }
};