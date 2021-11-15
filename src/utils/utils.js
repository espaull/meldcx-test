import axios from 'axios';

axios.defaults.baseURL = 'http://35.201.2.209:8000';

const getDevices = async () => {
  try {
    const res = await axios.get('/devices');
    return res.data.devices;
  } catch (error) {
    console.log(error);
  }
};

const login = async (email, password) => {
  return await axios.post('/login', { email, password });
};

const notify = async (token) => {
  try {
    await axios({
      method: 'post',
      url: '/notify',
      headers: { Authorization: `Bearer ${token}` },
      params: {
        name: 'Elliot Spaull',
        email: 'elliotspaull@gmail.com',
        repoUrl: 'https://github.com/espaull/meldcx-test',
        message:
          'This was a fun little project. Apologies for the almost non-existent testing, I just ended up running out of time. Happy to discuss improvements (of which there are many) at some stage!',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { getDevices, login, notify };
