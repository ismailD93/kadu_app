const HEADERS = {'Content-Type': 'application/json'};

export async function getUser() {
  const result = await fetch(`http://localhost:5258/api/User`, {
    method: 'GET',
    headers: HEADERS,
    mode: 'cors',
  });

  return result.json();
}
