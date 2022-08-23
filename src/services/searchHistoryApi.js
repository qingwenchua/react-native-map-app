import apisauce from 'apisauce';

const createHistory = (baseURL = 'https://63025017c6dda4f287b79680.mockapi.io/searchHistory/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  const setAuthToken = userAuth => api.setHeader('X-Auth-Token', userAuth);
  const setLanguage = () => api.setHeader('Accept-Language', 'id');
  const removeAuthToken = () => api.setHeader('Authorization', '');

  const getHistory = async() => await api.get('/');
  const saveHistory = async(place) => await api.post('/', place);
  const removeHistory = async(history) => await api.delete('/' + history.id);

  return {
    api,
    setAuthToken,
    setLanguage,
    removeAuthToken,
    getHistory,
    saveHistory,
    removeHistory,
  };
};

export default createHistory();