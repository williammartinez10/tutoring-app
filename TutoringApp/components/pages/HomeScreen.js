import React, { useState, useEffect } from "react";

import {
    Image,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
    
  } from "react-native";

import Slider from '../organisms/Scroll';
import CourseCard from '../atoms/CourseCard';
import PastActiveCourseButton from "../atoms/PastActiveCourseButton";

export default function HomeScreen() {
    // let tut = [{'id': 0,
    //     properties: {'name': "Joe Biden",
    //     'specialty': "Economics",
    //     'courses' : ['Intro to Economics', 'Finance'],
    //     'rating': 4
    //     }},
    //     {id: 1, properties: {'name' : "Vannesa Ramos",
    //     'specialty' : "Computer Science",
    //     'courses' : ['CIIC3081', 'CIIC4020'],
    //     'profile' : '',
    //     'rating' : 3.7}}
    // ];
    //  Current Issue to look into, the console is complaining
    //  that the tutor does not have a unique key, however, I believe
    //  this issue should be solved when the data base is set.

    const [status, setStatus] = useState("Active");

    const toggleStatus = () => {
        if (status === "Active") {
          setStatus("Past");
        } else {
          setStatus("Active");
        }
      };

    const tutor = {
        'name' : "Barack Obama",
        'specialty' : "Economics",
        'courses' : ['Intro to Economics', 'Finance'],
        'profile' : '',
        'rating' : 4
      };
      const tutor2 = {
        'name' : "Trump",
        'specialty' : "Computer Science",
        'courses' : ['CIIC3081', 'CIIC4020'],
        'profile' : '',
        'rating' : 3.7
      };
    const tutor3 = {
        'name' : "Jose River",
        'specialty' : "English",
        'courses' : ['INGL3010', 'INGL5030'],
        'profile' : '',
        'rating' : 4.7
      };
    const tutors2 = [tutor, tutor2, tutor3]

    const test_course_card_active = [{courseImage: require('../../assets/data-structures.png'), courseName: 'Data Structures', courseTutor: 'Paco'}, {courseImage: require('../../assets/data-structures.png'), courseName: 'Electric', courseTutor: 'Pablo'}]
    const test_course_card_past = [{courseImage: require('../../assets/electric.jpeg'), courseName: 'Data Structures', courseTutor: 'Paco'}, {courseImage: require('../../assets/electric.jpeg'), courseName: 'Electric', courseTutor: 'Pablo'}]
    const courseData = status === "Active" ? test_course_card_active : test_course_card_past;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.scroll_box}>
                <View style={styles.spacer} />
                <Slider text={status === "Active" ? 'Active Courses' : 'Past Courses'} components={courseData} isCourseCard={true} />
                <PastActiveCourseButton onPress={toggleStatus} status={status} />
                <View style={styles.spacer} />
                <Slider text={'Recommended Tutors'} components={tutors2} isRecommendedCard={true} />
                <View style={styles.spacer} />
            </View>  
        </ScrollView>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scroll_box: {
        padding: 5
    },
    box: {
        width: '100%',
        height: 180,
    },
    inner: {
        flex:1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        height: 40,
        width: '100%'
    }
}); 