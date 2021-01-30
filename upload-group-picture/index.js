/**
 * Upload a group picture to an AWS S3 bucket.
 * @author Andrew Jarombek
 * @since 1/29/2021
 */

const { upload } = require('/opt/nodejs/picture');

exports.handler = async (event) => {
    const env = process.env.ENV;
    const bucket = 'uasset.saintsxctf.com';
    const key = `${env}/${event.groupId}/${event.fileName}`;

    return await upload(bucket, event.base64Image, key);
};