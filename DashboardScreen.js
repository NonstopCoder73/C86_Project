import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class LoadingScreen extends Component {
    render(){
        return(
            <view
              style = {{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center"
              }}>
                  <Text>Dashboard Screen</Text>
              </view>
        )
    }
}