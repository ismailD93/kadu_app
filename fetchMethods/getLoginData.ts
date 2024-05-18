const HEADERS = {'Content-Type': 'application/json'};

export async function getLoginData(userName: string, password: string) {
  console.log(JSON.stringify({userName, password}));
  const result = await fetch(`http://localhost:5258/api/User/login`, {
    method: 'POST',
    headers: HEADERS,
    mode: 'cors',
    body: JSON.stringify({userName, password}),
  });

  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return result.json();
}
