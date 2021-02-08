async login({
    username,
    password,
  } {
    const resp = await fetch(`${baseUrl}/token`, {
      method: 'POST',
      body: String(
        new URLSearchParams({
          username,
          password,
          grant_type: 'password',
        })
      ),
      headers: {
        Authorization: `Basic ${apiToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await resp.json();

    return data;
  },

const apiToken = 'TGUzX0JpbWJCaWZlWWExOFpZNlVTejFSOWZzYTpfOE5MbmNqMjBxQjRDekVmUjlpRElOQ3dmejhh"';