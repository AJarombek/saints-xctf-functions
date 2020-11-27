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
    const body = new Buffer.from(event.base64Image.replace(/^data:image\/\w+;base64,/, ''), 'base64')
    const type = event.base64Image.split(';')[0].split('/')[1]

    try {
        const data = await s3.putObject({
            Bucket: 'uasset.saintsxctf.com',
            Key: `${env}/${event.username}/${event.fileName}`,
            Body: body,
            ACL: 'public-read',
            ContentEncoding: 'base64',
            ContentType: `image/${type}`
        }).promise();

        console.info(data);
        return true;
    } catch (e) {
        console.info(`Failed to upload ${event.fileName}`);
        console.error(e);
        return false;
    }
};