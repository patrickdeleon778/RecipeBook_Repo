import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import customColors from "../config/customColors";
import AnonBold from "../components/customFonts/AnonBold";
import AnonReg from "../components/customFonts/AnonReg";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions} from '@react-navigation/native';
import NavScreenHolder from '@react-navigation/native';



const CreateRecipeScreen = () => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [instructions, setInstructions] = useState("");

  const [ingredients, setIngredients] = useState([
    { id: uuid.v4(), name: "", quantity: "" },
  ]);


  // const openDrawer = () => {
  //   navigation.dispatch(DrawerActions.openDrawer());
  // };
 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { id: uuid.v4(), name: "", quantity: "" }]);
  };

  return (
   
    
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4 }}>
 
        <TouchableOpacity
         style={styles.menuIcon}
         onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={40} />
        </TouchableOpacity>
        
    
       
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/images/pizzaimage.webp")}
          />
        )}
        <TouchableOpacity
          style={[
            styles.imageButton,
            {
              position: "absolute",
              top: "50%",
              backgroundColor: "rgba(128, 128, 128, 0.75)",
            },
          ]}
          onPress={pickImage}
        >
          <AnonReg style={{ color: customColors.black }}>Recipe Image</AnonReg>
        </TouchableOpacity>
       
      </View>

      <ScrollView style={{ flex: 0.6 }}>
        <View
          style={{
            padding: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="bookmark-outline"
            size={40}
            color={customColors.primary}
          />
          <TextInput
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              maxWidth: "80%",
            }}
            placeholder="Title"
            multiline={true}
            onChangeText={(text) => setNewTitle(text)}
          />

        
            <FontAwesome5 name="share" size={40} color={customColors.primary} />
          
        </View>

        <View style={{ flex: 1, padding: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AnonBold style={{ fontSize: 24 }}>Ingredient</AnonBold>
            <TouchableOpacity onPress={addIngredient}>
              <FontAwesome5
                name="plus-circle"
                size={20}
                style={{ paddingLeft: 5 }}
                color={customColors.primary}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            {ingredients.map((ingredient, index) => (
              <View
                key={ingredient.id}
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: customColors.primary,
                      borderRadius: 50,
                      margin: 7,
                    }}
                  />
                  <TextInput
                    style={{ fontSize: 18, margin: 3, width: 80 }}
                    placeholder="Quantity"
                    onChangeText={(text) => {
                      let newIngredients = [...ingredients];
                      newIngredients[index].quantity = text;
                      setIngredients(newIngredients);
                    }}
                  />
                  <TextInput
                    style={{ fontSize: 14, margin: 5, width: 170 }}
                    placeholder="Ingredient"
                    onChangeText={(text) => {
                      let newIngredients = [...ingredients];
                      newIngredients[index].name = text;
                      setIngredients(newIngredients);
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    const newIngredients = ingredients.filter(
                      (item) => item.id !== ingredient.id
                    );
                    setIngredients(newIngredients);
                  }}
                  style={{ paddingRight: 10 }}
                >
                  <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ))}

            <View>
              <AnonBold style={{ fontSize: 24, marginTop: 20 }}>
                Instructions
              </AnonBold>
              <TextInput
                style={{ fontSize: 12, marginTop: 5, paddingLeft: 10 }}
                placeholder="Enter instructions here..."
                multiline={true}
                numberOfLines={10} // Adjust as needed
                onChangeText={(text) => {
                  setInstructions(text);
                }}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={[
                  styles.createButton,
                  {
                    backgroundColor: customColors.primary,
                  },
                ]}
                onPress={() => {
                  console.log("Image: ", image);
                  console.log("Title: ", newTitle);
                  console.log("Instructions: ", instructions);
                  console.log("Ingredients: ", ingredients);
                }}
              >
                <AnonReg style={{ color: customColors.white, fontSize: 24 }}>
                  Create Recipe
                </AnonReg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <NavScreenHolder navigation={navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.primary,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  
  },
  topHalf: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHalf: {
    flex: 0.6,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: customColors.white,
  },
  bottomHalfContent: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 30,
  },
  icon: {
    paddingBottom: 5,
  },
  imageButton: {
    width: "50%", // Set the width to 50%
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // Center the button horizontally
    backgroundColor: customColors.white,
  },
  createButton: {
    width: "70%",
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: customColors.primary,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.primary,
    paddingLeft: 5,
    paddingRight: 40,
    paddingBottom: 5,
    fontFamily: "Anon",
  },
});

export default CreateRecipeScreen;
