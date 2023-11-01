import React from "react"
import { AppProvider, UserProvider } from "@realm/react"

import i18n from "config/i18n"
import { APP_ID } from "config/atlas"
import Login from "screens/Login"
import Sync from "./Sync"

function App() {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={Login}>
        <Sync />
      </UserProvider>
    </AppProvider>
  )
}

export const APP_SCREEN = {
  id: "APP_SCREEN",
  name: "com.demo.App",
  title: i18n.t("demo.title"),
}

export default App
