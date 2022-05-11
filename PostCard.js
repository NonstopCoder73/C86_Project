import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;

  render() {
      return (
        <View style = {StyleSheet.container}>
          <View style = {StyleSheet.cardContainer}>
            <View style = {StyleSheet.authorContainer}>
              <View style = {StyleSheet.authorImageContainer}>
                <Image
                Source = {require("../asset/profile_img.png")}
                style = {StyleSheet.profileImage}
                ></Image>
              </View>
              <View style={StyleSheet.authorNameContainer}>
                <Text style={StyleSheet.authorNameText}>{this.props.post.author}</Text>
              </View>
              <Image source={require("../assets/post.jpeg")} style = {StyleSheet.postImage}/>
              <View style = {StyleSheet.captionContainer}>
                <Text style={StyleSheet.pactionText}>
                  {this.props.post.caption}
                </Text>
              </View>
              <View style = {StyleSheet.actionContainer}>
                <View style = {StyleSheet.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color = {'white'} />
                  <Text style = {StyleSheet.likeTest}>12k</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
   }
  }