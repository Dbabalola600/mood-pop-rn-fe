import React from "react";
import { View, FlatList, Platform, StyleSheet } from "react-native";
import PostsDisplay from "../../components/Display/PostsDisplay";




interface PostData {
    id: string;
    content: string;
    date: string;
    image: string;
    name: string;
  }
  

const UserPosts = () => {
  const data: PostData[] = [
    {
      id: "1",
      content: "hggg",
      date: "28-aug-23",
      image: "image",
      name: "mads",
    },
    {
      id: "2",
      content: "hggg",
      date: "28-aug-23",
      image: "image",
      name: "mads",
    },
    {
      id: "3",
      content: "hggg",
      date: "28-aug-23",
      image: "image",
      name: "mads",
    },
  ];

  const renderItem = ({ item }: { item: PostData })  => (
    <PostsDisplay
      content={item.content}
      date={item.date}
      image={item.image}
      name={item.name}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === "ios" ? 10 : 0, // Adjust for iOS safe area
  },
});

export default UserPosts;
