const axios = require('axios');
const { Builder } = require('xml2js');

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

        // Prepare XML data
        const xmlData = {
            data: {
                lead: {
                    key: 'kBhm95QrKSMObqAj7JS2O4dn9Apw63Cm',
                    leadgroup: '61848',
                    site: '21234',
                    introducer: '0',
                    type: '',
                    user: '',
                    status: '',
                    reference: '',
                    source: '',
                    medium: '',
                    term: '',
                    cost: '',
                    value: '',
                    title: '', // Add title if available
                    firstname: first_name,
                    lastname: last_name,
                    company: '', // Add company if available
                    jobtitle: '', // Add job title if available
                    phone1: phone,
                    phone2: '', // Add phone2 if available
                    fax: '', // Add fax if available
                    email: email,
                    address: '', // Add address if available
                    address2: '', // Add address2 if available
                    address3: '', // Add address3 if available
                    towncity: '', // Add towncity if available
                    postcode: '', // Add postcode if available
                    dobday: '', // Add dobday if available
                    dobmonth: '', // Add dobmonth if available
                    dobyear: '', // Add dobyear if available
                    contactphone: 'Unknown', // Set default or get from form
                    contactsms: 'Unknown', // Set default or get from form
                    contactemail: 'Unknown', // Set default or get from form
                    contactmail: 'Unknown', // Set default or get from form
                    contactfax: 'Unknown', // Set default or get from form
                    contacttime: 'Anytime', // Set default or get from form
                    data1: `Number of children: ${children}`,
                    data2: `Homeowner: ${homeowner}`,
                    data3: `Who For?: ${who_for}`,
                }
            }
        };

        const builder = new Builder();
        const xml = builder.buildObject(xmlData);

        // Send form data to the API endpoint
        await axios.post('https://aibestateplanningltd.flg360.co.uk/api/APILeadCreateUpdate.php', xml, {
            headers: {
                'Content-Type': 'application/xml',
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
