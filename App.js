import {TouchableOpacity, Text,View, ScrollView, SafeAreaView ,StyleSheet,Image,Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
const App = () => {
 
  return (
    <SafeAreaView >
      <ScrollView >



       <View style={{ height: 50, backgroundColor: "#343434", justifyContent:"center" ,paddingHorizontal:10}}>
       <Image
        source={require("./assets/imdb2.png")}
        style={{height:60, width:60}}
        resizeMode="contain"
   
      />


       </View>
       <View style={{backgroundColor: "#202020", paddingHorizontal:10}}>
        <Text style={styles.TextFilm}>Interstellar</Text>
        <Text style={styles.TextFilmCategorie}>2014 PG-13 2h 49min  Adventure,Drama,Sci-Fi</Text>
        </View>
 <View style={styles.Film}>

      <Image
        source={require("./assets/film.jpg")}
        style={styles.cover}
        resizeMode="contain"
      />
      

  <View style={{backgroundColor: "#202020"}}>
  <Text style={styles.TextFilmDescription}>A team of explorers travel through a wormhole in space in apptempt to ensure humanity's survival.</Text>

        <TouchableOpacity
            style={styles.button}
   
          >
        <Text style={{color:"white", fontWeight:"bold"}}>+ ADD TO WATCHLIST</Text>
        </TouchableOpacity>
 
  </View>
 </View>


<View style={styles.Notes}>

<View style={styles.Note} flex="1/3">
<FontAwesome name="star" size={24} color="yellow" />
<Text style={{color:"white"}}>8,6/10</Text>
<Text style={{color:"grey"}}>1,1M</Text>
</View>
<View style={styles.Note} flex="1/3">

<Feather name="star" size={24} color="grey" />
<Text style={{fontSize:14, color:"white"}}>RATE THIS</Text>
</View>
<View style={styles.Note} flex="1/3">
  <View style={styles.Metascore}>
  <Text style={{color:"white", fontSize:20}}>74</Text>
  </View>
<Text style={{color:"white", fontSize:14}}>Metascore</Text>
<Text style={{color:"grey", fontSize:12}}>46 critic reviews</Text>
</View>
</View>
<View style={{backgroundColor:"#191919", height:18}}></View>

 <View style={{ height: 500, backgroundColor: "#202020", paddingTop:20 }}>
<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:15}}>
<Text style={{color:"white", fontSize:24, paddingHorizontal:8}} >Top Billed Cast</Text>
<Text style={{color:"#0E78B7", fontWeight:'bold', paddingHorizontal:20}}>SEE ALL</Text>
</View>



 <View style={{flexDirection:"row" , backgroundColor:"#202020", marginHorizontal:10, width:600}}> 

<ScrollView   horizontal={true} style={styles.scrollView}>

<View style={{flexDirection:"row" , backgroundColor:"#202020"}}> 

<View style={{ backgroundColor:"#373737",marginRight:10}}>
<Image
        source={require("./assets/matthew.jpg")}
        style={styles.cover2}
        resizeMode="cover"
      />
<Text ellipsizeMode='tail'  numberOfLine={1}  style={{flex:1,color:"white"}}>Matthew McConaughey</Text>
<Text style={{color:"grey"}}>Cooper</Text>
</View>

<View style={{ backgroundColor:"#373737",marginRight:10}}>
<Image
        source={require("./assets/anne.jpg")}
        style={styles.cover2}
        resizeMode="cover"
      />
<Text style={{color:"white"}}>Anne Hathaway</Text>
<Text style={{color:"grey"}}>Brand</Text>
</View>

<View style={{ backgroundColor:"#373737"}}>
<Image
        source={require("./assets/jessica.jpg")}
        style={styles.cover2}
        resizeMode="cover"
      />
<Text style={{color:"white"}}>Jessica ch</Text>
<Text style={{color:"grey"}}>Murph</Text>
</View>

</View> 
</ScrollView>
 </View> 


<View style={{marginHorizontal:10}}>
<Text style={{color:"white", marginTop:10}}>Director</Text>
<Text style={{color:"grey"}}>Christopher Nolan</Text>
<Text style={{color:"white", marginTop:10}}>Writers</Text>
<Text style={{color:"grey"}}>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
</View>

 </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


const styles = StyleSheet.create({
  TextFilm: {
color: "white",
 fontSize: 54

  },
  TextFilmCategorie:{
    color:"grey"
  },
  cover: {width: 100 , height: 180

  },
Film:{
  backgroundColor:"#212121",
display:"flex",
flexDirection: "row",
paddingHorizontal:10

},



TextFilmDescription:{
marginTop:25,
color:"white",
textAlign:'justify',
marginLeft:15,
width:'43%',

backgroundColor:'#202020'
},

button: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0E78B7",
  padding: 10,
  width:'43%',
  marginLeft:15,
  marginTop:15,
borderRadius:5,
},

Notes:{
flexDirection:"row",
backgroundColor: "#212121",
height:80,


},

Note :{
  alignItems:"center",
}
,
Metascore:{
  alignItems:"center",
  justifyContent:"center",
  width:24, height:24,
  backgroundColor: "#61C74F",
}
,
space:{
  height: 20,
  backgroundColor: "black"
},

cover2:{
  width: 160 , height: 200
},
scrollView: {


width: 400
}
  // btnText: { color: "white", fontSize: 30 },
});