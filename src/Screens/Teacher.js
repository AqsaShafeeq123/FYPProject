
// import React, { useState } from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';


// const DATA = [
//   {
//     id: '1',
//     title: 'First Item',
//   },
//   {
//     id: '2',
//     title: 'Second Item',
//   },
//   {
//     id: '3',
//     title: 'Third Item',
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
//     <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const Teacher = () => {
//   const [selectedId, setSelectedId] = useState();

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };



// export default Teacher;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 12,
//   },
// });










import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,

  TouchableOpacity,
} from 'react-native';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
  </TouchableOpacity>
);

const Teacher = () => {

  const [selectedId, setSelectedId] = useState();
  const DATA = [
    {

      id: '1',
      name: 'Dr Naseer',
      image: 'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
    },
    {
      id: '2',
      name: 'Mr. Umar',
      image: 'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
    },
    {
      id: '3',
      name: 'Dr Munir',
      image: 'https://i.pinimg.com/550x/03/06/46/0306467bab5c7b61cf9823a263d2ab9b.jpg',
    },
  ];


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    <Image
      source={{ uri: item.image }}
      style={styles.imgStyle}

    />
    return (

      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>

  );
};

export default Teacher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
  },
  imgStyle: {

    width: 40,
    height: 40,
    borderRadius: 40,
  },
});




