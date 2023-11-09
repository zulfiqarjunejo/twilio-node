# twilio-node

This Node.js project demonstrates how to send an SMS message using the Twilio API. The project uses environment variables to store sensitive information like your Twilio credentials and phone number.

## Getting Started

### Twilio setup

1. Register an account on Twilio platform.

2. Register a sender phone number.

3. Securely store the credentials described in next section.

### Project setup

1. Clone this repository to your local machine.

2. Install the project dependencies by running `npm install`.

3. Create a `.env` file in the root directory of the project and add your Twilio credentials and phone number in the following format:

```
TWILIO_ACCOUNT_SID=<your Twilio account sid>
TWILIO_AUTH_TOKEN=<your Twilio auth token>
TWILIO_PHONE_NUMBER=<your Twilio phone number>
```

4. Run the script by entering the following into the command line:

```bash
npm start
```

This will send an SMS message to the number specified in the to field of the script.

## Dependencies

The project uses the following dependencies:

- dotenv
- twilio

## Considerations

If you are using Twilio in trial mode, you can only send messages to numbers verified in Twilio registration step.