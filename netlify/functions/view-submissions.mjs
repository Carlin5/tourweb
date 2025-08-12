import fs from 'fs/promises';
import path from 'path';

const submissionsPath = path.resolve(process.cwd(), 'netlify', 'submissions.json');

// WARNING: Hardcoded credentials. For a real application, use environment variables.
const ADMIN_USERNAME = 'Admin';
const ADMIN_PASSWORD = 'admin';

async function getSubmissions() {
  try {
    await fs.access(submissionsPath);
    const data = await fs.readFile(submissionsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export const handler = async (event) => {
  // Basic Auth Check
  const authHeader = event.headers.authorization;
  if (!authHeader) {
    return {
      statusCode: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
      body: 'Unauthorized',
    };
  }

  const [authType, credentials] = authHeader.split(' ');
  if (authType !== 'Basic') {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  const decodedCreds = Buffer.from(credentials, 'base64').toString();
  const [username, password] = decodedCreds.split(':');

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const submissions = await getSubmissions();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissions.sort((a, b) => b.id - a.id)), // Show newest first
    };
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An internal server error occurred.' }),
    };
  }
};
