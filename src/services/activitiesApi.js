import api from'./externalApi';

export async function getDateActivites(token) {
  const response = await api.get('/activities/date', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
