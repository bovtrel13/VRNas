
async function sendingData(url, form) {
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form), 
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during sending data:', error.message);
  }
}

export default sendingData;