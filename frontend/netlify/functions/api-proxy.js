import https from 'https';

export const handler = async function(event) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // API endpoint
    const apiUrl = 'https://yourdomain.infinityfree.net/get_data.php';
    
    // Add user ID if provided in query parameters
    const userId = event.queryStringParameters?.userId;
    const url = userId ? `${apiUrl}?userId=${userId}` : apiUrl;
    
    // Fetch data from backend
    const response = await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: data
          });
        });
        
        res.on('error', (error) => {
          reject(error);
        });
      }).on('error', (error) => {
        reject(error);
      });
    });

    // Return the response with CORS headers
    return {
      statusCode: response.statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: response.body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        message: error.message
      })
    };
  }
}; 