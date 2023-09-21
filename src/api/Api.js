export async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response)
    if (!response.ok) {
      throw new Error('Error fetching');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching:', error);
  }
}