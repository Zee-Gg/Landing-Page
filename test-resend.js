const { Resend } = require('resend');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envConfig = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envConfig[key.trim()] = value.trim();
    }
});

const resend = new Resend(envConfig.RESEND_API_KEY);

(async function() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'TechVision Contact <onboarding@resend.dev>',
      to: ['zainabgilani2226@gmail.com'],
      subject: 'Test Email',
      html: '<p>This is a test email</p>'
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', data);
    }
  } catch (err) {
    console.error('Exception:', err);
  }
})();
