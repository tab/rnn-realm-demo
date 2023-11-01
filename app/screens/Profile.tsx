import React from "react"
import { View, Text } from "react-native"
import { useUser } from "@realm/react"

import { layoutStyles } from "styles"
import Button from "components/ui/Button"

const Profile = () => {
  const user = useUser()

  const handleLogout = () => {
    user.logOut()
  }

  return (
    <View style={layoutStyles.root}>
      <View style={layoutStyles.content}>
        <Text>{user?.profile?.email}</Text>
        <Button onPress={handleLogout}>Logout</Button>
      </View>
    </View>
  )
}

export const PROFILE_SCREEN = {
  id: "PROFILE_SCREEN",
  name: "com.demo.Profile",
}

export default Profile
