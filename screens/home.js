import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const image = {
    uri:
      "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  const recentImage = {
    uri:
      "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri:
          "https://www.flightcentre.co.nz/sites/v0.flightcentre.co.nz/files/styles/fcl_blog_tile/public/fcl-blog/shutterstock_1474225751_new_chums_feature_imager.jpg?itok=96H02kY1",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri:
          "https://www.edreams.fr/blog/wp-content/uploads/sites/6/2013/08/image-rome.jpg",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri:
          "https://i.pinimg.com/originals/24/a3/64/24a3646087df584b4b7a37fe3a065dcc.jpg",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  const goToPost = () => {
    navigation.navigate("Post");
  };

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>

          <View style={styles.SearchContainer}>
            <Text style={styles.UserGreet}>Hi Akshay,</Text>
            <Text style={styles.UserText}>
              Where would you like to go today ?
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.SearchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 60, opacity: 0.6 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 30 }}
          />
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 14,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.ImageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Recently Viewed
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}
            >
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "92%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={{
                  marginLeft: 10,
                  position: "relative",
                  top: 4,
                  marginHorizontal: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                }}
              >
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Venice, the capital of northern Italy's Veneto Region in the
              Adriatic Sea
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  SearchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  UserText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  SearchBox: {
    marginTop: 16,
    backgroundColor: "#FFF",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});

export default Home;
