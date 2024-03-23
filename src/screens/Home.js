import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
 } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView } 
    from 'react-native-gesture-handler' 
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';
import { Entypo } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';


export default class Home extends Component {

 renderCard(item){
   return(  
    <View key={item.id} style={styles.cardContainer}>
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Icon
                    name="ios-remove"
                    size={40}
                    color="red"
                    style={{marginTop:25}}
                />
                <Text style={styles.number}>{item.number}</Text>
            </View>
            <View style={{marginLeft:150}}>
                <Icon name="md-options" size={24} color="#FFF"/>
                <Text style={styles.textCovid}>COVID-19</Text>
            </View>
        </View>
    </View>
    );
}

renderNoMoreCards(){
    return(
        <View title="All Domne!">
            <Text style={styles.noCard}>NO MORE CARDS HERE</Text>
            <Button backgroundColor="#03A9F4" title="Get more!"/>
        </View>
    );
}

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/unnamed.jpg")}
                    style={styles.map}
                >
                    <Text style={[styles.textDash,{marginTop:"15%"}]}>EV CHARGING</Text>
                </ImageBackground>

                {/* Box just below EV CHARGING heading */}
                <View style={styles.box} >
                    <View style={[styles.box,{backgroundColor:"red",alignSelf:"left",width:"85%"}]}>
                        <View style={styles.icon}>
                        <Ionicons style={styles.icon1} name="fast-food-outline" size={24} color="black" />
                        <View style={styles.text}>
                            <Text style={styles.head}>PLACES TO CHILL:</Text>
                            <Text style={styles.head1} >KFC</Text>
                        </View>
                        
                      <View style={[styles.box,{backgroundColor:"black",alignSelf:"left",width:"50%"}]}></View>
                      </View>
                    </View>
                    </View>
                
                <ScrollView 
                    style={{marginTop:50}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <Cards
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        icon="power-plug"
                        title="TOTAL NO. OF PORTS"
                        bg="red"
                        number="4"
                        type="entypo"
                    />
                    <Cards
                        icon="event-available"
                        title="AVAILABLE"
                        bg="#FFF"
                        number="2"
                        type="material"
                    />
                     <Cards
                        icon="clock"
                        title="OCCUPIED"
                        bg="#FFF"
                        number="2"
                        type="font-awesome-5"
                    />
                     
                    <Cards
                        icon="times-circle"
                        title="NON FUNCTIONAL"
                        bg="#FFF"
                        number="0"
                        type="font-awesome-5"
                    />
                </ScrollView>
                <View style={{alignItems:'center'}}>
                    <Stars
                    default={2.5}
                    count={5}
                    half={true}
                    starSize={30} /* Adjust the size as needed */
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle, { fontSize: 30 }]} />}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle, { fontSize: 30 }]} />}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle, { fontSize: 30 }]} />}
                    />
                </View>
                <View style={{marginBottom:34}}>
                    {/* TouchableOpacity button */}
                    <TouchableOpacity 
                        onPress={() => {
                            // Handle onPress event here
                            console.log("Review button pressed");
                        }}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>REVIEW</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c2732",
        alignItems: 'center'
    },
    cardContainer:{
        height:150,
        width:320,
        alignSelf:"center",
        backgroundColor:"#6A706E",
        borderRadius:30,
        
    },
    card:{
        height:150,
        width:260,
        paddingTop:20,
        paddingHorizontal:30,
        backgroundColor:'#2b3240',
        borderRadius:30,
        flexDirection:'row'
    },
    title:{
        color:"#6A706E",
        width:100,
        fontSize:12,
        fontWeight:"bold"
    },
    number:{
        color:"#FFF",
        width:100,
        fontSize:22,
        fontWeight:"bold",
        marginTop:-10,
    },
    textCovid:{
        transform:[{ rotate : "-90deg"}],
        color:"#3a4b4f",
        fontSize:14,
        width:90,
        marginLeft:-35,
        fontWeight:'bold',
        marginTop:20
    },
    noCard:{
        marginBottom:10,
        color:'#FFF',
        alignSelf:"center"
    },
    map:{
        height:150,
        paddingTop:25,
        paddingHorizontal:20,
        
    },
    col:{
        flexDirection:'row'
    },
    minusIcon:{
        marginTop:-20,
        marginLeft:5
    },
    avatarContainer:{
        width:"50%",
        alignItems:'flex-end',
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20
    },
    textDash:{
        color:"#FFF",
        fontSize:20,
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    },
    colContainer:{
        flexDirection:"row",
        paddingHorizontal:30,
        alignItems:'center',
    },
    textGlobal:{
        fontWeight:"bold",
        fontSize:16,
        color:"red"
    },
    textRussia:{
        fontWeight:"bold",
        fontSize:16,
        paddingHorizontal:30,
        color:"#6a706e"
    },
    reloadContainer:{
        backgroundColor:"#FFF",
        elevation:2,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center",
        marginLeft:50
    },
    box: {
        backgroundColor: '#FFF',
        height: 150, // Set the desired height
        borderRadius: 30, 
        width:"90%",
        alignItems:'center',
        justifyContent:"center"
    },
    icon:
    {
        display:'flex',
        flexDirection:'row-reverse',
        alignSelf:'flex-start',
        
    },
    icon1:
    {
        paddingLeft:100,
        marginTop:10,
        
    },
    text:
    {
        bottom:10,
        position:"absolute",
        color:"#b8b8aa",
        fontWeight:"bold",
        fontSize:11,
        width:90
    },
    head:{
        fontWeight:"bold",
        color:"#b8b8aa"
    },
    head1:{
        fontWeight:"bold"
    },
    myStarStyle: {
        color: 'white',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        paddingBottom:30
      },
      myEmptyStarStyle: {
        color: 'white',
      },
      buttonContainer: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
        marginBottom: 10,
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
