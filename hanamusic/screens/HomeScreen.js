import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenName from '../components/ScreenName'
import TrackPlayer from 'react-native-track-player';

export default class HomeScreen extends React.Component {
    componentDidMount() {
        // Creates the player
        TrackPlayer.setupPlayer().then(async () => {

            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'test',
                url: require('../genesis_1_10.mp3'),
                title: '창세기 1-10',
                artist: '모세',
                artwork: require('../artist.png')
            });

            // Starts playing it
            TrackPlayer.play();
        });
    }

    static navigationOptions = {
    };
    render() {
        return (
            <View style={styles.container}>
                <ScreenName name={'Home'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});