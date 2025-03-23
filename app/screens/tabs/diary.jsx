import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DiaryScreen() {
  return (
    <View>
      <Text>Diary Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        position: "absolute",
        top: 66,
        left: 22,
        width: 302,
        height: 55,
    }
})