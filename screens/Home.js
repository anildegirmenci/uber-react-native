import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

const YELP_API_KEY = "Iz0boD2Y60PV8H94XZZ1RBwwS1Q7lW8xkDaS0pG4S16wwDW_jrS5mm1EdqIO4hBWCXGyfHcCYR02DU5B7t0kevUMBAAUTYzkJg8DRV_FlRchyAd6w3oCp8d6SFJUYXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('LosAngeles');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles";

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLocaleLowerCase()))
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{
                backgroundColor: '#fff',
                padding: 15, paddingTop: Platform.OS === 'android' ? 55 : 15
            }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}