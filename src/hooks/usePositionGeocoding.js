import { useEffect, useState } from 'react';
import axios from 'axios';
import credentials from '../../credentials';

const usePositionGeocoding = (address) => {
  const [addressLocation, setAddressLocation] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${credentials.positionstack_access_key}&query=${address}`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        // handle success
        setAddressLocation({
          lat: response.data.data[0].latitude,
          lng: response.data.data[0].longitude,
        });
        return addressLocation;
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  }, []);
};
export default usePositionGeocoding;
