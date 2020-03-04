import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import SigningButtons from "../components/SigningButtons";

export default function LandScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://mms.businesswire.com/media/20190806005272/en/736833/5/FullLogo_Black_GoodUncle_highres.jpg"
          }}
        />
        <Text style={styles.upperText}>
          Quick and free delivery to convenient stops on campus
        </Text>
      </View>

      <View style={styles.containerBottom}>
        <SigningButtons />
        <TouchableOpacity
          onPress={()=> navigation.navigate('Main')}
        >
          <Text style={styles.bottomText}>Preview Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  containerImage: {
    flex: 5,
    paddingTop: 100,
    // borderWidth: 5
  },
  image: {
    top: 0,
    left: 0,
    right: 0,
    height: 200
    // width: 100
  },

  containerBottom: {
    flex: 1,
    bottom: 0,
    marginBottom: 10
  },

  bottomText: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#05db6a"
  },
  upperText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 25
  }
});
