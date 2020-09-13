import { NativeModules } from 'react-native';

const { PTPaytabsLibrary } = NativeModules;

// Parameters
PTPaytabsLibrary.merchant_email = 'pt_merchant_email';
PTPaytabsLibrary.secret_key = 'pt_secret_key';
PTPaytabsLibrary.transaction_title = 'pt_transaction_title';
PTPaytabsLibrary.amount = 'pt_amount';
PTPaytabsLibrary.currency_code = 'pt_currency_code';
PTPaytabsLibrary.customer_email = 'pt_customer_email';
PTPaytabsLibrary.customer_phone_number = 'pt_customer_phone_number';
PTPaytabsLibrary.order_id = 'pt_order_id';
PTPaytabsLibrary.product_name = 'pt_product_name';
PTPaytabsLibrary.timeout_in_seconds = 'pt_timeout_in_seconds';
PTPaytabsLibrary.address_billing = 'pt_address_billing';
PTPaytabsLibrary.city_billing = 'pt_city_billing';
PTPaytabsLibrary.state_billing = 'pt_state_billing';
PTPaytabsLibrary.country_billing = 'pt_country_billing';
PTPaytabsLibrary.postal_code_billing = 'pt_postal_code_billing';
PTPaytabsLibrary.address_shipping = 'pt_address_shipping';
PTPaytabsLibrary.city_shipping = 'pt_city_shipping';
PTPaytabsLibrary.state_shipping = 'pt_state_shipping';
PTPaytabsLibrary.country_shipping = 'pt_country_shipping';
PTPaytabsLibrary.postal_code_shipping = 'pt_postal_code_shipping';
PTPaytabsLibrary.color = 'pt_color';
PTPaytabsLibrary.theme_light = 'pt_theme_light';
PTPaytabsLibrary.language = 'pt_language';
PTPaytabsLibrary.tokenization = 'pt_tokenization';
PTPaytabsLibrary.preauth = 'pt_preauth';

export default PTPaytabsLibrary;
