import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


import Icon from 'react-native-vector-icons/MaterialIcons'

import { playbackService } from '../../musicPlayerServices'

const ControlCenter = () => {

    const playBackState = usePlaybackState()
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback: State) => {
        const  currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
          <Text>Previous</Text>
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Text>{playBackState?"play":"pause"}</Text>
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Text>Next</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter