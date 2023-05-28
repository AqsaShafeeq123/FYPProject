import React, { useState, useEffect } from 'react';

import { DataTable } from 'react-native-paper';
import {
    ScrollView
} from 'react-native';

const ChrDetail = () => {


    // Api response store for get
    const [teacherData, setTeacherData] = useState([]);

    // APi Code get Get DVr

    async function getTeacherDetail() {
        try {
            let response = await fetch('http://192.168.1.101:8000/api/get-all-teacher-chr');
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTeacherDetail();
        return () => { }
    }, []);
    return (

        <ScrollView horizontal={true}>
            <DataTable style={{ width: 950 }}>
                <DataTable.Header style={{ backgroundColor: 'pink', top: 4 }}>
                    <DataTable.Title>Sr. No</DataTable.Title>
                    <DataTable.Title numeric>Teacher Name</DataTable.Title>

                    <DataTable.Title numeric>Course Name</DataTable.Title>
                    <DataTable.Title numeric> Discipline</DataTable.Title>
                    <DataTable.Title numeric>Date</DataTable.Title>
                    <DataTable.Title numeric>Status</DataTable.Title>
                    <DataTable.Title numeric>Total Time In</DataTable.Title>
                    <DataTable.Title numeric>Total Time Out</DataTable.Title>
                </DataTable.Header>

                {teacherData.map((item, index) => (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{index + 1}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.teacherName}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.courseName}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.discipline}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.status}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.totalTimeIn}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.totalTimeOut}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>


    );
};

export default ChrDetail;

