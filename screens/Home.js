import React from 'react'
import { View, Text, SafeAreaView, Platform } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
            <View style={{backgroundColor:'#fff', 
                padding:15, paddingTop: Platform.OS === 'android' ? 55 : 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}
