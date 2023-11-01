import React from "react"
import { View, Text } from "react-native"
import { Navigation } from "react-native-navigation"
import { useUser, useRealm, useQuery } from "@realm/react"

import { layoutStyles } from "styles"
import { SEARCH_SCREEN } from "./Search"
import { Demo } from "models"
import Button from "components/ui/Button"
import List from "components/ui/List"

const Home = () => {
  const realm = useRealm()
  const user = useUser()

  const items = useQuery(Demo)

  const handleOpenModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: SEARCH_SCREEN.name,
              options: SEARCH_SCREEN.options,
              passProps: {},
            },
          },
        ],
      },
    })
  }

  const handleAdd = () => {
    realm.write(() => {
      realm.create(Demo, {
        userId: user.id,
        title: "TITLE = 111",
        description: "DESCRIPTION = 222",
      })
    })
  }

  return (
    <View style={layoutStyles.root}>
      <View style={layoutStyles.content}>
        <Button onPress={handleAdd}>Add</Button>
        <List items={items} />
        <Button onPress={handleOpenModal}>Open Modal</Button>
      </View>
    </View>
  )
}

export const HOME_SCREEN = {
  id: "HOME_SCREEN",
  name: "com.demo.Home",
}

export default Home
