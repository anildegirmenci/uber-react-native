import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems';


export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{
                backgroundColor: '#fff',
                padding: 15, paddingTop: Platform.OS === 'android' ? 55 : 15
            }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}
