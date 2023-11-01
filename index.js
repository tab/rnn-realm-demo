/**
 * @format
 */

import "react-native-get-random-values"
import { LogBox } from "react-native"
import { Navigation } from "react-native-navigation"
import { AppProvider, UserProvider } from "@realm/react"
import Ionicons from "react-native-vector-icons/Ionicons"

import { APP_ID } from "./app/config/atlas"
import Sync from "./app/Sync"

import Login from "screens/Login"
import Home, { HOME_SCREEN } from "screens/Home"
import Profile, { PROFILE_SCREEN } from "screens/Profile"
import Search, { SEARCH_SCREEN } from "screens/Search"

Navigation.registerComponent(
  HOME_SCREEN.name,
  () => (props) => (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Login}>
        <Sync>
          <Home {...props} />
        </Sync>
      </UserProvider>
    </AppProvider>
  ),
  () => Home,
)

Navigation.registerComponent(
  SEARCH_SCREEN.name,
  () => (props) => (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Login}>
        <Sync>
          <Search {...props} />
        </Sync>
      </UserProvider>
    </AppProvider>
  ),
  () => Search,
)

Navigation.registerComponent(
  PROFILE_SCREEN.name,
  () => (props) => (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Login}>
        <Sync>
          <Profile {...props} />
        </Sync>
      </UserProvider>
    </AppProvider>
  ),
  () => Profile,
)

Navigation.events().registerAppLaunchedListener(() => {
  Promise.all([
    Ionicons.getImageSource("home-outline", 30, "gray"),
    Ionicons.getImageSource("home", 30, "yellow"),
    Ionicons.getImageSource("person-outline", 30, "gray"),
    Ionicons.getImageSource("person", 30, "yellow"),
  ]).then(([iconHome, iconHomeSelected, iconProfile, iconProfileSelected]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                id: HOME_SCREEN.id,
                children: [
                  {
                    component: {
                      name: HOME_SCREEN.name,
                      options: {
                        topBar: topBarOptions,
                        bottomTabs: bottomTabsOptions,
                        bottomTab: {
                          ...bottomTabOptions,
                          icon: iconHome,
                          selectedIcon: iconHomeSelected,
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: PROFILE_SCREEN.id,
                children: [
                  {
                    component: {
                      name: PROFILE_SCREEN.name,
                      options: {
                        topBar: topBarOptions,
                        bottomTabs: bottomTabsOptions,
                        bottomTab: {
                          ...bottomTabOptions,
                          icon: iconProfile,
                          selectedIcon: iconProfileSelected,
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    })
  })
})

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      waitForRender: true,
    },
    showModal: {
      waitForRender: true,
    },
    push: {
      waitForRender: true,
    },
  },
  statusBar: {
    backgroundColor: "white",
  },
  topBar: {
    title: {
      color: "white",
    },
    backButton: {
      color: "white",
    },
    background: {
      color: "white",
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
})

const topBarOptions = {
  background: {
    color: "white",
    translucent: false,
    blur: false,
  },
  borderHeight: 0,
  drawBehind: true,
  noBorder: true,
  largeTitle: {
    color: "black",
    visible: false,
  },
}

const bottomTabsOptions = {
  barStyle: "default",
  backgroundColor: "white",
  translucent: false,
  hideShadow: false,
  titleDisplayMode: "alwaysHide",
}

const bottomTabOptions = {
  fontSize: 15,
  iconInsets: { top: 0, left: 0, bottom: 0, right: 0 },
  iconColor: "gray",
  selectedIconColor: "black",
  disableIconTint: true,
  disableSelectedIconTint: true,
  textColor: "gray",
  selectedTextColor: "black",
}

LogBox.ignoreAllLogs(true)
