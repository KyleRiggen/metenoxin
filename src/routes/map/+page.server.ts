// src/routes/+page.server.ts
export async function load({ fetch }) {
  try {
    // Define the URLs for the API calls
    const localUrl = 'http://localhost:5173/moon-minerals.json';

    // Fetch data from both URLs concurrently
    const localResponse = await fetch(localUrl);

    // Check if both responses are ok
    if (!localResponse.ok) {
      throw new Error('Failed to fetch local data');
    }

    // Parse the JSON data from both responses
    const localData = await localResponse.json();

    //console.log(localData);

    return { data: localData };
  } catch (error) {
    console.error('Error loading data:', error);
    return { data: { localData: [] } }; // Return empty arrays in case of error
  }
}
