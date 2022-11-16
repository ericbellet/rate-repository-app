import React from 'react'
import { View, Text, FlatList } from 'react-native'
import resources from '../data/english1-resources'
import ResourceItem from './ResourceItem.jsx'

export default function ResourcesList() {
  return (
    <FlatList
        data={resources}
        ItemSeparatorComponent={() => <Text> </Text>}
        keyExtractor={(resource) => String(resource.id)}
        renderItem={({ item }) => (
            <ResourceItem resource={item} />
        )}
    />
  )
}