import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Student_Materials = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row0}>
          <View style={styles.column}>
            <Text style={styles.text1}>INFO OF SPECIALISATION SUBJECTS</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>About KICT</Text>
            <Text style={styles.text}>
              The Kulliyyah of Information and Communication Technology (KICT)
              was established in November 2001. From that moment, KICT has made
              necessary moves to realize its vision, which is to produce
              knowledge workers equipped with ICT skills and knowledge ('Ilm)
              and the Consciousness of God (Taqwa).
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>Mission</Text>
            <Text style={styles.text}>
              The Kulliyyah has the mission to promote collaboration with other
              universities and industries, both nationally and internationally,
              in teaching, learning, research, and consultancy, to establish a
              center of excellence for each department in KICT, and to advance
              research and development in creating a value-based information
              system.
            </Text>
          </View>
        </View>
        
        <View style={styles.row3}>
          <View style={styles.column}>
            <Text style={styles.text1}>INFO OF REQUIRED SUBJECTS</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>Importent Contact</Text>
            <Text style={styles.text}>
              This Kulliyyah is the combination of the Department of Information
              Systems (DIS), Department of Computer Sciences (DCS), and
              Department of Library and Information Science (DLIS). All
              programmes in the Kulliyyah are designed for integration of
              Islamic knowledge and ICT.
            </Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.Image}
              source={require("../Images/Logo/Tutor.png")}
            />
            <Text style={styles.text1}>info 2</Text>
            <Text style={styles.text}>
              KICT also aspires to initiate and develop more rigorous programmes
              in the area of information and communication technology. It places
              a great emphasis on providing excellent programmes and teaching
              resources in order to enhance the quality of learning and
              research. It is expected that students will find a unique set of
              opportunities available to study for both undergraduate and
              postgraduate programmes.
            </Text>
          </View>
        </View>
        <Text> About KICT </Text>
      </View>
    </View>
  );
};

export default Student_Materials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    backgroundColor: "#E3BC9A",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  Image: {
    //marginTop:100,
    marginBottom: 20,
    width: 150,
    height: 150,
  },
  content: {
    marginTop: 50,
    backgroundColor: "#E3BC9A",
  },
  row0: {
    marginTop: 380,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row1: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row3: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  row2: {
    marginTop: 5,
    flexDirection: "row",
    //marginBottom: 20,
  },
  column: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 13,
    textAlign: "justify",
    marginBottom: 10,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

// import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
// import React from 'react'

// export default function Student_Materials({ navigation }) {
//   return (
//     <View style={Styles.container}>
//       <Image style={Styles.Image} source={require('../Images/Logo/SS.png')} />
//       <View style={Styles.ButtonTogether}>
//         <TouchableOpacity onPress={() => navigation.navigate('Required_Sub')}>
//           <Image style={Styles.Image2}
//             source={require('../Images/Icons/Icons/8.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('S_Sub')}>
//           <Image style={Styles.Image2}
//             source={require('../Images/Icons/Icons/9.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <ImageBackground source={require('../Images/Logo/s.png')} resizeMode="cover" style={Styles.image}>
//       </ImageBackground>
//     </View>
//   )
// }
// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     //alignItems: 'center',
//   },
//   Image: {
//     width: 100,
//     height: 100,
//     marginTop: 3,
//     marginLeft: 20,
//     marginBottom: -80,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   Image1: {
//     width: 220,
//     height: 70,
//     marginTop: 30,
//   },
//   Image2: {
//     width: 200,
//     height: 80,
//   },
//   ButtonTogether: {
//     marginLeft: 400,
//     flexDirection: 'row',
//     //justifyContent: 'space-between',
//     marginTop: 0,
//     backgroundColor: 'white',
//   },
// })
