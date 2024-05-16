const axios = require('axios');

exports.handler = async (event, context) => {
    try {
        const {
        first_name,
        last_name,
        email,
        phone,
        age,
        homeowner,
        marital_status,
        who_for,
        children,
        } = JSON.parse(event.body);

    // Send form data to Airtable
    await axios.post('https://api.airtable.com/v0/appm7iDWoW5I5sRY0/CRM', {
        fields: {
            'First Name': first_name,
            'Last Name': last_name,
            'Email': email,
            'Phone': phone,
            'Age': age,
            'Homeowner': homeowner,
            'Marital Status': marital_status,
            'Who For': who_for,
            'Children': children,
        },
    }, {
        headers: {
            'Authorization': 'Bearer patsZSp1bhes6jl55.8a0bc067cf269af14cea2798167c7a6ca4b043d0c39e1b8a173ce8157f6651a1',
            'Content-Type': 'application/json',
        },
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