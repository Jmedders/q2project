require('dotenv').config();

module.exports = {
    sendSMS: function(phoneNum) {
        var client = require('twilio')(process.env.LIVE_ACCOUNT_SID, process.env.LIVE_AUTH_TOKEN);

        client.sms.messages.post({
            to: phoneNum,
            from: process.env.TWILIO_NUMBER,
            body: 'You are late to your gig.'
        }, function(err, responseData) {
            if (err) {
                console.log(err);
            }
            console.log(responseData);
        });
    }
}
