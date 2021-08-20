/**
 * Get a signed URL for upload a profile picture to an AWS S3 bucket.
 * @author Andrew Jarombek
 * @since 8/19/2021
 */

const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const env = process.env.ENV;
    const fileExtension = event.mimeType === 'image/jpeg' ? '.jpg' : '.png';

    const bucket = 'uasset.saintsxctf.com';
    const key = `${env}/profile/${event.username}/${Date.now()}.${fileExtension}`;

    const s3Params = {
        Bucket: bucket,
        Key: key,
        Expires: 300,
        contentType: event.mimeType
    };

    const uploadUrl = await s3.getSignedUrlPromise('putObject', s3Params);

    return JSON.stringify({
        uploadUrl,
        key
    });
};