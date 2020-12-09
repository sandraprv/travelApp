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
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Post = ({ navigation }) => {
  const image = {
    uri:
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27",
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://img.flytrippers.com/wp-content/uploads/2017/08/05215445/phuket08.jpg",
      },
      title: "Thailand",
      key: "1",
    },
    {
      image: {
        uri:
          "https://www.voyageavecnous.fr/wp-content/uploads/2015/05/decouvrir-canada.jpg",
      },
      title: "Canada",
      key: "2",
    },
    {
      image: {
        uri:
          "https://www.planetware.com/photos-large/F/france-french-alps-grenoble.jpg",
      },
      title: "French Alps",
      key: "3",
    },
    {
      image: {
        uri:
          "https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/74040/1592721561_32947",
      },
      title: "Egypt",
      key: "4",
    },
  ]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.Tagline}>Discover Switzerland</Text>
        <Text style={styles.Placename}>
          Explore the scenic beauty of Switzerland
        </Text>

        <TouchableOpacity
          onPress={goBack}
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.BookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text
          style={{
            padding: 14,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          About the place
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Switzerland is a mountainous Central European country, home to
          numerous lakes, villages and the high peaks of the Alps. Its cities
          contain medieval quarters, with landmarks like capital Bern's
          Zytglogge clock tower and Lucerne's wooden chapel bridge. Banking and
          finance are key industries, and Swiss watches chocolate are world
          renowned.
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Switzerland boasts some of the world's most famous inventions - they
          created Velcro, cellophane, the Swiss Army Knife, absinthe, the potato
          peeler, Helvetica font, LSD, muesli, edible chocolate gold, and milk
          chocolate to name a few.
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Switzerland is an expensive country to visit - there's no doubt about
          it. I think the floor for what a backpacker/budget traveler should
          travel Switzerland on is around $75 USD. At that price point, you'd
          have enough money to do basics, stay in some hostels, go out, and
          enjoy some adventure and outdoor activities.
        </Text>

        <View>
          <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
            Suggested Places
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.darkOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: "absolute",
                        left: 10,
                        bottom: 10,
                      }}
                    />
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: "absolute",
                        left: 30,
                        bottom: 10,
                        color: "white",
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
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
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  Tagline: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 4,
  },
  Placename: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BookTicketBtn: {
    position: "absolute",
    elevation: 2,
    right: 12,
    top: 350,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
  },
  BookTicketText: {
    color: "white",
    fontSize: 14,
  },
  darkOverlay: {
    position: "absolute",
    left: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    width: 150,
    height: 150,
    opacity: 0.2,
  },
});

export default Post;
