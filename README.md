# saints-xctf-functions

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

| Directory Name           | Description                                                                       |
|--------------------------|-----------------------------------------------------------------------------------|
| `forgot-password`        | AWS Lambda function for sending a forgot password email.                          |
| `report`                 | AWS Lambda function for sending me an email with a user's report/feedback.        |
| `send-authentication`    | AWS Lambda function for sending an authentication code email to a new user.       |
| `upload-group-picture`   | AWS Lambda function for an admin uploading a group picture.                       |
| `upload-profile-picture` | AWS Lambda function for a user uploading a profile picture.                       |
| `welcome`                | AWS Lambda function for sending a welcome email to a new user.                    |
| `mock`                   | Mocked implementation of the Function API, used for tests and local environments. |