export const handler = async (event) => {
  // Basic Authentication
  const authHeader = event.headers.authorization;
  if (!authHeader) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
      headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
    };
  }

  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
  const [username, password] = credentials.split(':');

  // In a real app, use environment variables for credentials
  if (username !== 'Admin' || password !== 'admin') {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid credentials' }),
    };
  }

  // Fetch submissions from Netlify API
  const { NETLIFY_API_TOKEN, SITE_ID } = process.env;

  if (!NETLIFY_API_TOKEN || !SITE_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error: Missing API token or Site ID.' }),
    };
  }

  const url = `https://api.netlify.com/api/v1/sites/${SITE_ID}/submissions`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${NETLIFY_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Netlify API Error: ${response.status} - ${errorBody}`);
    }

    const submissions = await response.json();

    // Format the data for the frontend
    const formattedSubmissions = submissions.map(sub => ({
      id: sub.id,
      name: sub.data.name,
      email: sub.data.email,
      phone: sub.data.phone || 'N/A',
      country: sub.data.country || 'N/A',
      message: sub.data.message,
      submittedAt: sub.created_at,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(formattedSubmissions),
    };

  } catch (error) {
    console.error('Error fetching submissions:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
