# saints-xctf-functions

![Maintained Label](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)

### Overview

Serverless functions hosted on AWS API Gateway / API Lambda.  These functions live under the `fn.saintsxctf.com` domain.

### Commands

**Setup `upload-profile-picture` function locally.**

```bash
nvm use v12.18.4
cd upload-profile-picture
yarn
```

### Directories

| Directory Name               | Description                                                                       |
|------------------------------|-----------------------------------------------------------------------------------|
| `forgot-password`            | AWS Lambda function for sending a forgot password email.                          |
| `report`                     | AWS Lambda function for sending me an email with a user's report/feedback.        |
| `send-authentication`        | AWS Lambda function for sending an authentication code email to a new user.       |
| `signed-url-group-picture`   | AWS Lambda function for retrieving a signed URL for uploading group pictures.     |
| `signed-url-profile-picture` | AWS Lambda function for retrieving a signed URL for uploading profile pictures.   |
| `upload-group-picture`       | AWS Lambda function for an admin uploading a group picture.                       |
| `upload-profile-picture`     | AWS Lambda function for a user uploading a profile picture.                       |
| `welcome`                    | AWS Lambda function for sending a welcome email to a new user.                    |
| `mock`                       | Mocked implementation of the Function API, used for tests and local environments. |

### Version History

**[v2.1.0](https://github.com/AJarombek/saints-xctf-functions/tree/v2.1.0) - New Picture Uploading Approach**

> Release Date: August 21st, 2021

Created two new functions for uploading group and profile pictures.  These functions use an S3 bucket signed URL 
approach, replacing the existing base64 encoded image approach. 

* Signed URL Group Picture Function
* Signed URL Profile Picture Function

**[v2.0.0](https://github.com/AJarombek/saints-xctf-functions/tree/v2.0.0) - SaintsXCTF V2 Release**

> Release Date: May 30th, 2021

This release marks the second major version of the SaintsXCTF website.

* Forgot Password, Report, Send Activation Code, and Welcome Email Lambda Functions.
* Upload Group & Profile Picture Lambda Functions.
* Mocked Implementation of the AWS API Gateway Function API, written using Flask.
