/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {NativeEventEmitter, Platform, StyleSheet, Text, Button, View} from 'react-native';
import RNPaytabsLibrary from 'react-native-paytabs-library';

// Prepare Paypage events for IOS
const eventPreparePaypageEmitter = new NativeEventEmitter(RNPaytabsLibrary);
const subscription = eventPreparePaypageEmitter.addListener(
  'EventPreparePaypage',
  (prepare) =>  RNPaytabsLibrary.log("eventPreparePaypageEmitter: " + prepare.action)
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  state = {
    message: '--'
  };

  constructor(props){
    super(props);
    this.state = { message: '' };
  }

  onPressPay(){
    RNPaytabsLibrary.start({
      [RNPaytabsLibrary.merchant_email]: "test@exampe.com",
      [RNPaytabsLibrary.secret_key]: "kuTEjyEMhpVSWTwXSSOSeiiDAeMCOdyeuFZKiXAlhzjSKqswUWAgbCaYFivjvYzCWaWJbRszhjZuEQqsUycVzLSyMIaZiQLlRqlp",// Add your Secret Key Here
      [RNPaytabsLibrary.transaction_title]: "Mr. John Doe",
      [RNPaytabsLibrary.amount]: "2.0",
      [RNPaytabsLibrary.currency_code]: "USD",
      [RNPaytabsLibrary.customer_email]: "test@exampe.com",
      [RNPaytabsLibrary.customer_phone_number]: "+973000000",
      [RNPaytabsLibrary.order_id]: "1234567",
      [RNPaytabsLibrary.product_name]: "Tomato",
      [RNPaytabsLibrary.timeout_in_seconds]: "300", //Optional
      [RNPaytabsLibrary.address_billing]: "test test",
      [RNPaytabsLibrary.city_billing]: "Juffair",
      [RNPaytabsLibrary.state_billing]: "Manama",
      [RNPaytabsLibrary.country_billing]: "BHR",
      [RNPaytabsLibrary.postal_code_billing]: "00973", //Put Country Phone code if Postal code not available '00973'//
      [RNPaytabsLibrary.address_shipping]: "test test",
      [RNPaytabsLibrary.city_shipping]: "Juffair",
      [RNPaytabsLibrary.state_shipping]: "Manama",
      [RNPaytabsLibrary.country_shipping]: "BHR",
      [RNPaytabsLibrary.postal_code_shipping]: "00973", //Put Country Phone code if Postal
      [RNPaytabsLibrary.color]: "#cccccc",
      [RNPaytabsLibrary.language]: 'en', // 'en', 'ar'
      [RNPaytabsLibrary.tokenization]: true,
      [RNPaytabsLibrary.preauth]: false
    }, (response) => {
      RNPaytabsLibrary.log("on Response Payment");
      console.log(response);
      // Response Code: 100 successful otherwise fail
      if (response.pt_response_code == '100')
        RNPaytabsLibrary.log("Transaction Id: " + response.pt_transaction_id);
      else
        RNPaytabsLibrary.log("Otherwise Response: " + response.pt_response_code);
      this.state = { message: response.pt_transaction_id };
      // Tokenization
      //RNPaytabs.log(response.pt_token_customer_email);
      //RNPaytabs.log(response.pt_token_customer_password);
      //RNPaytabs.log(response.pt_token);
      
    });
  }
  onPressApplePay(){
    var args = {
      [RNPaytabsLibrary.merchant_email]: "test@exampe.com",
      [RNPaytabsLibrary.secret_key]: "kuTEjyEMhpVSSSwXBSOSeiiDAeMCOdyeuFZKiXAlhzjSKqswUWAgbCaYFivjvYzCWaWJbRszhjZuEQqsUycVzLSyMIaZiQLlRqlp",// Add your Secret Key Here
      [RNPaytabsLibrary.transaction_title]: "Mr. John Doe",
      [RNPaytabsLibrary.amount]: "2.0",
      [RNPaytabsLibrary.currency_code]: "AED",
      [RNPaytabsLibrary.customer_email]: "test@exampe.com",
      [RNPaytabsLibrary.order_id]: "1234567",
      [RNPaytabsLibrary.country_code]: "AE",
      [RNPaytabsLibrary.language]: 'en',
      [RNPaytabsLibrary.preauth]: false,
      [RNPaytabsLibrary.merchant_identifier]: 'merchant.bundleId',
      [RNPaytabsLibrary.tokenization]: true
    };
    RNPaytabsLibrary.startApplePay(args, (response) => {
      RNPaytabsLibrary.log("on Response Payment");
      console.log(response);
      // Response Code: 100 successful otherwise fail
      if (response.pt_response_code == '100')
        RNPaytabsLibrary.log("Transaction Id: " + response.pt_transaction_id);
      else
        RNPaytabsLibrary.log("Otherwise Response: " + response.pt_response_code);
      this.state = { message: response.pt_transaction_id };
      // Tokenization
      //RNPaytabs.log(response.pt_token_customer_email);
      //RNPaytabs.log(response.pt_token_customer_password);
      //RNPaytabs.log(response.pt_token);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Paytabs Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
        <Button
            onPress={this.onPressPay}
            title="Pay with PayTabs"
            color="#c00"
          />
        <Button
            onPress={this.onPressApplePay}
            title="Pay with Apple Pay"
            color="#c00"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
