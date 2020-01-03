import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Platform,
  Button,
  Dimensions,
} from 'react-native';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

import ScreenName from '../components/ScreenName.js'

export default class JoyChantScreen extends React.Component {

    state = {
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: true,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        playerWidth: Dimensions.get('window').width,
      };
    
      _youTubeRef = React.createRef();
    
      static navigationOptions = {
    
      };
    
      render() {
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.welcome}>{'<YouTube /> component for React Native.'}</Text>
    
            <YouTube
              ref={this._youTubeRef}
              // You must have an API Key for the player to load in Android
              apiKey="AIzaSyCK_-JwOt2sjfcpIILdiPzsi-OckwD2jdU"
              // Un-comment one of videoId / videoIds / playlist.
              // You can also edit these props while Hot-Loading in development mode to see how
              // it affects the loaded native module
              // videoId="xuCn8ux2gbs"
              // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
              playlistId="PL60xc-Khy-RkATUwfmp0HZmXo37DjilAD"
              play={this.state.isPlaying}
              loop={this.state.isLooping}
              fullscreen={this.state.fullscreen}
              controls={1}
              style={[
                { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
                styles.player,
              ]}
              onError={e => {
                this.setState({ error: e.error });
              }}
              onReady={e => {
                this.setState({ isReady: true });
              }}
              onChangeState={e => {
                this.setState({ status: e.state });
              }}
              onChangeQuality={e => {
                this.setState({ quality: e.quality });
              }}
              onChangeFullscreen={e => {
                this.setState({ fullscreen: e.isFullscreen });
              }}
              onProgress={e => {
                this.setState({ currentTime: e.currentTime });
              }}
            />
    
            <Text style={styles.instructions}>
              {this.state.isReady ? 'Player is ready' : 'Player setting up...'}
            </Text>
            <Text style={styles.instructions}>Status: {this.state.status}</Text>
            <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
    
            {/* Show Progress */}
            <Text style={styles.instructions}>
              Progress: {Math.trunc(this.state.currentTime)}s ({Math.trunc(this.state.duration / 60)}:
              {Math.trunc(this.state.duration % 60)}s)
              {Platform.OS !== 'ios' && <Text> (Click Update Progress & Duration)</Text>}
            </Text>
    
            <Text style={styles.instructions}>
              {this.state.error ? 'Error: ' + this.state.error : ''}
            </Text>
          </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      buttonGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 5,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      player: {
        alignSelf: 'stretch',
        marginVertical: 10,
      },
    });