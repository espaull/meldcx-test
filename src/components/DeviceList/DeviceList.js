import { useEffect, useState } from 'react';

import useInterval from '../../hooks/useInterval';
import { getDevices } from '../../utils';

import Orbiter from '../Orbiter';

const DeviceList = ({ pollDelay }) => {
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    setDevices(await getDevices());
  };

  // We'll use useEffect to trigger the initial call to getDevices on mount, and then start polling
  useEffect(() => fetchDevices(), []);
  useInterval(fetchDevices, pollDelay);

  return (
    <>
      <h1>{devices.length}</h1>
      <Orbiter devices={devices} />
    </>
  );
};

export default DeviceList;
