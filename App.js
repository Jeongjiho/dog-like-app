import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from "expo-camera";
import * as Permissions from 'expo-permissions';
import ImagePicker from 'react-native-image-picker';


class App extends Component {

    async checkPermission() {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();

        //https://blog.effectussoftware.com/react-native-image-picker/
        /*WebView.isFileUploadSupported().then(res => {
          if (res === true) {
            console.log('true!!!');
          } else {
            console.log('false!!!');
          }
        });*/

        /*let options = {

            storageOptions: {

              skipBackup: true,

              path: 'images',

            },

          };


          console.log('들어옴');
          ImagePicker.launchImageLibrary(options, (res) => {
          console.log('들어옴1');

            console.log('Response = ', res);

            if (res.didCancel) {

              console.log('User cancelled image picker');

            } else if (res.error) {

              console.log('ImagePicker Error: ', res.error);

            } else if (res.customButton) {

              console.log('User tapped custom button: ', res.customButton);

              alert(res.customButton);

            } else {

              const source = { uri: res.uri };

              console.log('response', JSON.stringify(res));

              this.setState({

                filePath: res,

                fileData: res.data,

                fileUri: res.uri

              });

            }

          });



        if (cameraPermission.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        if (imagePermission.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }*/

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
