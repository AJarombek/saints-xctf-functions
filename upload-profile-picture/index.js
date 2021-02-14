/**
 * Upload a user's profile picture to an AWS S3 bucket.
 * @author Andrew Jarombek
 * @since 11/21/2020
 */

const { upload } = require('/opt/nodejs/picture');

exports.handler = async (event) => {
    const env = process.env.ENV;
    const bucket = 'uasset.saintsxctf.com';
    const key = `${env}/profile/${event.username}/${event.fileName}`;

    return await upload(bucket, event.base64Image, key);
};