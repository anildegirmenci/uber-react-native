import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterailCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: '#fff' }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}


const RestaurantImage = () => (
    <>
        <Image source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg" }}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterailCommunityIcons name="heart-outline" size={25} color={'#fff'} />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Thai Kitchen</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 minute</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text>4.5</Text>
        </View>
    </View>
);