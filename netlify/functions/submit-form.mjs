import fs from 'fs/promises';
import path from 'path';

const submissionsPath = path.resolve(process.cwd(), 'netlify', 'submissions.json');

async function getSubmissions() {
  try {
    await fs.access(submissionsPath);
    const data = await fs.readFile(submissionsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist, create it with an empty array
    if (error.code === 'ENOENT') {
      await fs.writeFile(submissionsPath, JSON.stringify([]), 'utf-8');
      return [];
    }
    throw error;
  }
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, phone, country, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const submissions = await getSubmissions();

    const newSubmission = {
      id: Date.now(),
      name,
      email,
      phone,
      country,
      message,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);

    await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An internal server error occurred.' }),
    };
  }
};
