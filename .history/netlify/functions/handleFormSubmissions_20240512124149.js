const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Send form data to your CRM backend
    await axios.post('YOUR_CRM_ENDPOINT', {
      name,
      email,
      message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' }),
    };
  }
};