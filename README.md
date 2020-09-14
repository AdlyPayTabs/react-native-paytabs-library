# react-native-paytabs-library
![Version](https://img.shields.io/badge/Paytabs%20React%20Native%20library-v1.0.7-green)
## Getting started

`$ npm install @adlypaytabs/react-native-paytabs-library@1.0.10 --save`

### Step 1: Link Library

`$ react-native link @adlypaytabs/react-native-paytabs-library@1.0.10`


## Usage
```javascript
import PTPaytabsLibrary from '@adlypaytabs/react-native-paytabs-library';

PTPaytabsLibrary.start({
  [PTPaytabsLibrary.merchant_email]: "merchant_email",
  [PTPaytabsLibrary.secret_key]: "merchant_secret_ket",
  [PTPaytabsLibrary.transaction_title]: "Mr. John Doe",
  [PTPaytabsLibrary.amount]: "2.0",
  [PTPaytabsLibrary.currency_code]: "USD",
  [PTPaytabsLibrary.customer_email]: "test@example.com",
  [PTPaytabsLibrary.customer_phone_number]: "+97333109781",
  [PTPaytabsLibrary.order_id]: "1234567",
  [PTPaytabsLibrary.product_name]: "Tomato",
  [PTPaytabsLibrary.timeout_in_seconds]: "300", //Optional
  [PTPaytabsLibrary.address_billing]: "test test",
  [PTPaytabsLibrary.city_billing]: "Juffair",
  [PTPaytabsLibrary.state_billing]: "Manama",
  [PTPaytabsLibrary.country_billing]: "BHR",
  [PTPaytabsLibrary.postal_code_billing]: "00973", //Put Country Phone code if Postal code not available '00973'//
  [PTPaytabsLibrary.address_shipping]: "test test",
  [PTPaytabsLibrary.city_shipping]: "Juffair",
  [PTPaytabsLibrary.state_shipping]: "Manama",
  [PTPaytabsLibrary.country_shipping]: "BHR",
  [PTPaytabsLibrary.postal_code_shipping]: "00973", //Put Country Phone code if Postal
  [PTPaytabsLibrary.color]: "#cccccc",
  [PTPaytabsLibrary.language]: 'en', // 'en', 'ar'
  [PTPaytabsLibrary.tokenization]: true,
  [PTPaytabsLibrary.preauth]: false
}, (response) => {
  // Callback for success & fail.

  // { pt_token_customer_email: '',pt_token: '',pt_token_customer_password: '', pt_transaction_id: '123456',pt_response_code: '100' }

  PTPaytabsLibrary.log("on Response Payment");
  console.log(response);
  // Response Code: 100 successful otherwise fail
  if (response.pt_response_code == '100')
    PTPaytabsLibrary.log("Transaction Id: " + response.pt_transaction_id);
  else
    PTPaytabsLibrary.log("Otherwise Response: " + response.pt_response_code);

  this.state = { message: response.pt_transaction_id };

  // Tokenization
  //RNPaytabs.log(response.pt_token_customer_email);
  //RNPaytabs.log(response.pt_token_customer_password);
  //RNPaytabs.log(response.pt_token);

});
```
