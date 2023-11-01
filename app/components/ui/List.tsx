import React from "react"
import { FlatList, View, Text } from "react-native"
import { useRealm } from "@realm/react"

import { layoutStyles } from "styles"
import { Demo } from "models"
import Button from "./Button"

type Props = {
  items: Realm.Results<Demo>
}

const ListComponent = ({ items }: Props) => {
  const realm = useRealm()

  const renderHeader = () => {
    return <></>
  }

  const renderFooter = () => {
    return <></>
  }

  const renderEmpty = () => {
    return (
      <View style={layoutStyles.root}>
        <View style={layoutStyles.content}>
          <Text style={layoutStyles.title}>Empty</Text>
        </View>
      </View>
    )
  }

  const renderItem = ({ item, index }: { item: Demo; index: number }) => {
    return (
      <View style={layoutStyles.listItem}>
        <Text>{item.createdAt.toString()}</Text>
        <Button onPress={() => handleRemove(item)}>Remove</Button>
      </View>
    )
  }

  const handleRemove = (item: Demo) => {
    realm.write(() => {
      realm.delete(item)
    })
  }

  return (
    <FlatList
      numColumns={1}
      data={items}
      keyExtractor={(item) => item._id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
    />
  )
}

export default ListComponent
