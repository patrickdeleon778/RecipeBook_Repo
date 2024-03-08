import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';
import customColors from "../config/customColors";
import AnonReg from "../components/customFonts/AnonReg";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from "@react-navigation/routers";
import { FontAwesome5 } from "@expo/vector-icons";
import AnonBold from "../components/customFonts/AnonBold";
import RecipeContext from "../context/RecipeContext";
import { useUser } from '../context/UserContext';

const FavoriteRecipes = ({ navigation }) => {
  const navigate = useNavigation();
  const { savedRecipes } = useContext(RecipeContext);
  const { user } = useUser(); // Get the current user
  const { getFavorites } = useContext(RecipeContext); // Get the getFavorites function from context
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user && user._id) {
      getFavorites(user._id); // Fetch favorites using the user's ID
    }
  }, [user]); 


  const filteredRecipes = favoriteRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    const titles = favoriteRecipes.map(recipe => recipe.title);
    console.log(titles);
  };

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1 }} >
<TouchableOpacity
    style={styles.menuIcon}
    onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
   >
     <Ionicons name={"menu"} size={40} />
   </TouchableOpacity>

    

    
  
    <FlatList
      contentContainerStyle={{ marginHorizontal: 20, paddingTop: 60 }}
      ListHeaderComponent={
        <>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search favorite recipe"
              onChangeText={setSearchQuery}
            />

            <TouchableOpacity
              style={{
                backgroundColor: customColors.white,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
              onPress={handleSearch}
            >
              <FontAwesome5
                name="pizza-slice"
                size={28}
                color={customColors.medium}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <AnonBold style={{ fontSize: 20, fontWeight: "bold" }}>
              Favorite Recipes
            </AnonBold>
          </View>
        </>
      }
      data={filteredRecipes}
      numColumns={2}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Recipe", { recipe: item })}>
            <Image source={{ uri: item.image }} style={{ width: "100%", height: 200, borderRadius: 40 }} />
          </TouchableOpacity>
          <AnonReg style={{ textAlign: "center", marginTop: 5 }}>
            {item.title}
          </AnonReg>
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    paddingBottom: 50,
    right: 20,
    zIndex: 1,
  
  },
  image: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  }
});

export default FavoriteRecipes;