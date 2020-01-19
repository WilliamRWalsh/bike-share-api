const accountSid = 'AC473c474bf61b4caef14df26e44c5349f';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

function SendSMS(number: string, message: string)
    client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15017122661',
        to: '+15558675310'
    })
    .then(message => console.log(message.sid));