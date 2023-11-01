import React from "react"
import { SafeAreaView } from "react-native"
import { OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from "realm"
import type Realm from "realm"
import { RealmProvider, useUser } from "@realm/react"

import { Demo } from "models"
import { layoutStyles } from "styles"

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: OpenRealmBehaviorType.DownloadBeforeOpen,
  timeOutBehavior: OpenRealmTimeOutBehavior?.OpenLocalRealm ?? "openLocalRealm",
  timeOut: 1000,
}

const Sync = ({ children }: any) => {
  const user = useUser()
  const partitionValue = user.id

  return (
    <RealmProvider
      schema={[Demo]}
      sync={{
        partitionValue,
        newRealmFileBehavior: realmAccessBehavior,
        existingRealmFileBehavior: realmAccessBehavior,
      }}
    >
      <SafeAreaView style={layoutStyles.root}>{children}</SafeAreaView>
    </RealmProvider>
  )
}

export default Sync
