### Overview

AWS Lambda function for sending me an email with a user's report/feedback.

### Commands

**Local Execution**

```bash
# Set up the proper Node.js version
nvm use v13.9.0
yarn

# Send an email locally.
node sendEmailNode Andrew Jarombek "Test Report"
```

### Files

| Filename               | Description                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------|
| `email.css`            | Stylesheet for the report email.                                                             |
| `email.html`           | HTML document for the report email.                                                          |
| `email.js`             | JavaScript code which sends the email.                                                       |
| `package.json`         | `npm` dependencies for the AWS Lambda function.                                              |
| `sendEmailAWS.js`      | JavaScript code which invokes `email.js`.  This script is meant for execution on AWS Lambda. |
| `sendEmailNode.js`     | JavaScript code which invokes `email.js`.  This script is meant for execution locally.       |