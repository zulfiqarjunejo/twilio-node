require('dotenv').config();

const twilioCredentials = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER
};

const client = require('twilio')(twilioCredentials.accountSid, twilioCredentials.authToken);

async function main() {
  const response =  await client.messages.create({
     body: '...', // replace with your content
     from: twilioCredentials.phoneNumber,
     to: '...' // replace with actual number
   });

   console.log(`${response.sid} => ${response.status}`);
}

main();