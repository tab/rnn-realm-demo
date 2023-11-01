import React from "react"
import { View, Text } from "react-native"
import { useUser, useRealm, useQuery } from "@realm/react"

import { layoutStyles } from "styles"
import { Demo } from "models"

const Search = () => {
  const realm = useRealm()
  const user = useUser()

  const items = useQuery(Demo)

  console.log("--- Search ---")
  console.log(items)

  return (
    <View style={layoutStyles.root}>
      <View style={layoutStyles.content}>
        <Text>Search screen</Text>
        <Text>{user.id}</Text>
      </View>
    </View>
  )
}

export const SEARCH_SCREEN = {
  id: "SEARCH_SCREEN",
  name: "com.demo.Search",
  options: {
    topBar: {
      visible: false,
    },
    bottomTabs: {
      visible: false,
    },
    modal: {
      swipeToDismiss: true,
    },
    layout: {
      backgroundColor: "transparent",
      componentBackgroundColor: "transparent",
    },
  },
}

export default Search
