import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.boardContainer}>
        <View style={{ height: 300 }}>
          <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              top: -40,
            }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={style.textContainer}>
          <View>
            <Text
              style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
            >
              Sankofa Natural
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                textAlign: "center",
                color: COLORS.grey,
              }}
            >
              Nature's Curative beauty
            </Text>
          </View>

          <PrimaryButton
            onPress={() => navigation.navigate("Home")}
            title="Get Started"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  boardContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-around",
    paddingBottom: 10,
  },
});

export default OnBoardScreen;
