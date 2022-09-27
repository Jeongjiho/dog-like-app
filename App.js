import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


class App extends Component {

    async checkPermission() {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        ImagePicker.requestCameraPermissionsAsync();
        const imagePermission = await ImagePicker.requestMediaLibraryPermissionsAsync(false);


        /*WebView.isFileUploadSupported().then(res => {
          if (res === true) {
            console.log('true!!!');
          } else {
            console.log('false!!!');
          }
        });*/



        if (cameraPermission.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        if (imagePermission.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        /*console.log('===========================');
        console.log(imagePermission);*/

    }

    render() {
        this.checkPermission();
        return (
              <WebView
                  style={styles.container}
                  source={{ uri: 'http://www.slowbut.com/' }}
                  originWhitelist={['*']}
              />
          );
    }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
