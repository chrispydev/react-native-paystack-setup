import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { Paystack } from "react-native-paystack-webview";
// import { Alert } from "react-native";
// import COLORS from "../../consts/colors";
// import Icon from "react-native-vector-icons/MaterialIcons";

export default function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_49e57891b46aa81b70f8cd59d08e0280b076f728"
        amount={"25000.00"}
        currency="GHS"
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
          navigation.navigate("BoardScreen");
        }}
        onSuccess={(res) => {
          // handle response here
          navigation.navigate("HomeScreen");
        }}
        autoStart={true}
      />
    </View>
  );
}

//paystackKey="pk_test_49e57891b46aa81b70f8cd59d08e0280b076f728"
