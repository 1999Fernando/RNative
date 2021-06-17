import React, { useState, useEffect } from "react";
import {  StyleSheet } from "react-native";
import { ListItem, Avatar,Button} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);
  
      useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
          const users = [];
          querySnapshot.docs.forEach((doc) => {
            const { name, email, phone } = doc.data();
            users.push({
              id: doc.id,
              name,
              email,
              phone,
            });
          });
          setUsers(users);
        });
      }, []);
    
      return (
        <ScrollView>
          <Button
            onPress={() => props.navigation.navigate("CreateUserScreen")}
            title="Create User"
          />

          
          {users.map((user) => {
            return (
              <ListItem
                key={user.id}
                bottomDivider
                onPress={() => {
                  props.navigation.navigate("UserDetailScreen", {
                    userId: user.id,
                  });
                }}
              >
                <ListItem.Chevron />
                <Avatar
                  source={{
                    uri:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                  rounded
                />
                <ListItem.Content>
                  <ListItem.Title>{user.name}</ListItem.Title>
                  <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      );
  
};
const styles = StyleSheet.create({
  buttonG: {
    flex: 1,
    padding: 4,
    padding: 100,
  }
});
export default UserScreen;
