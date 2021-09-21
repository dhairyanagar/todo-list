import React,{Component,useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView,Keyboard,Platform } from 'react-native';
import {AdMobBanner,AdMobInterstitial} from 'expo-ads-addmob'
import Task from './components/Task'

const interstitial =async()=>{
await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712')
//test id, replace with your-admob-unit-id

try{
    await AdMobInterstitial.requestAdAsync()
    await AdMobInterstitial.showAdAsync()
    
} catch(error){
    console.log(error)
}

};

export default function App(){
    useEffect(()=>{
        interstitial()
    })
    const[task,setTask] = useState()
    const[taskItems,setTaskItems]=useState([])
}


