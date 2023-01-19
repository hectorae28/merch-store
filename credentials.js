//require('dotenv').config()
const credentials = {
  paypal_clientId:
    process.env.REACT_APP_PAYPAL_CLIENT_ID||secrets.REACT_APP_PAYPAL_CLIENT_ID,
  positionstack_access_key: process.env.REACT_APP_POSITIONSTACK_ACCESS_KEY,
};
export default credentials;
