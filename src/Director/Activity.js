
import React, { useState, useEffect } from 'react';

import { DataTable } from 'react-native-paper';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Activity = () => {
    // Api response store for get
    const [teacherData, setTeacherData] = useState([]);

    // APi Code get Get DVr

    async function getTeacherDetail() {
        try {
            let response = await fetch(
                'http://192.168.1.101:8000/api/get-all-teacher-chr',
            );
            let json = await response.json();
            setTeacherData(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTeacherDetail();
        return () => { };
    }, []);



    // -------------------------------------
    const handleGeneratePDF = async () => {
        // Add your PDF generation code here
        console.log('Generate PDF');
        let data3 = ""
        data3 = `
        <table style="width:100%">
        <tr>
        <th>Sr.NO</th>
        <th>Teacher Name</th>
        <th>Course Name</th>
        <th>Date</th>
        <th>Discipline</th>
        <th>sit</th>
        <th> Stand</th>
        
        <th> Status</th>

      </tr>
        `
        let row = ""
        teacherData.map((item, index) => {
            row += `
      <tr>
        <td>${index + 1}</td>
        <td>${item?.teacherName}</td>
        <td>${item?.courseName}</td>
        <td>${item?.date}</td>
        <td>${item?.discipline}</td>
        <td>${item?.sit}</td>
        <td>${item?.stand}</td>
    
        <td>${item?.status}</td>


      </tr>
  
    
            `
        })
        data3 += row
        data3 += `</table>`

        let options = {
            html: data3,
            fileName: 'ActivityReport',
            directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options)
        console.log(file.filePath);
        alert(file.filePath);
    };







    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <DataTable style={{ width: 950 }}>
                    <DataTable.Header style={{ backgroundColor: 'pink', top: 4 }}>
                        <DataTable.Title>Sr. No</DataTable.Title>
                        <DataTable.Title numeric>Teacher Name</DataTable.Title>

                        <DataTable.Title numeric>Course Name</DataTable.Title>

                        <DataTable.Title numeric>Date</DataTable.Title>
                        <DataTable.Title numeric>discipline </DataTable.Title>
                        <DataTable.Title numeric> sit</DataTable.Title>
                        <DataTable.Title numeric> stand </DataTable.Title>
                        {/* <DataTable.Title numeric> mobile </DataTable.Title> */}
                        <DataTable.Title numeric>Status</DataTable.Title>
                    </DataTable.Header>

                    {teacherData.map((item, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>{index + 1}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.teacherName}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.courseName}</DataTable.Cell>

                            <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.discipline}</DataTable.Cell>
                            <DataTable.Cell numeric>
                                {item.sit}
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                                {item.stand}
                            </DataTable.Cell>
                            {/* <DataTable.Cell numeric>
                                {item.mobile}
                            </DataTable.Cell> */}

                            <DataTable.Cell numeric>{item.status}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleGeneratePDF}>
                <Text style={styles.buttonText}>Generate PDF</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Activity;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#4682b4',
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 190,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',

        alignSelf: 'center',
        marginBottom: 90,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
