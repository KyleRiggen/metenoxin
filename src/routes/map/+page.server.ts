// src/routes/+page.server.ts
export async function load({ fetch }) {
  try {
    const response = await fetch('http://localhost:5173/moon-minerals.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    // console.log(data);
    return { data };
  } catch (error) {
    console.error('Error loading data:', error);
    return { data: [] }; // Return an empty array in case of error
  }
}

