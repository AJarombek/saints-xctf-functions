### Overview

AWS Lambda function for sending a welcome email to a new user.

### Commands

**Local Execution**

```bash
# Set up the proper Node.js version
nvm use v13.9.0
yarn

# Send an email locally.
node sendEmailNode andrew@jarombek.com Andrew Jarombek andy
```

### Files

| Filename               | Description                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------|
| `email.css`            | Stylesheet for the welcome email.                                                            |
| `email.html`           | HTML document for the welcome email.                                                         |
| `email.js`             | JavaScript code which sends the email.                                                       |
| `package.json`         | `npm` dependencies for the AWS Lambda function.                                              |
| `sendEmailAWS.js`      | JavaScript code which invokes `email.js`.  This script is meant for execution on AWS Lambda. |
| `sendEmailNode.js`     | JavaScript code which invokes `email.js`.  This script is meant for execution locally.       |