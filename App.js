import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./img/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A solidão é a sorte de todos os espíritos excepcionais.',
      'A perseverança é a mãe da boa sorte.',
      'Sorte é estar pronto quando a oportunidade vem.',
      'A sorte favorece a mente bem preparada.'];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: '" ' + this.frases[numeroAleatorio] + ' "',
      img: require('./img/biscoitoAberto.png')
    });

  }

  render(){
    return(
      <View style= {styles.container}>

      <Text style={styles.texts}>{this.state.textoFrase}</Text>
      
      <Image
        source={this.state.img}
        style={styles.img}
      />

      <TouchableOpacity style={styles.Btn} onPress={this.quebraBiscoito}>
        <View style={styles.BtnArea}>
          <Text style={styles.BtnText}>QUEBRAR BISCOITO</Text>
        </View>
      </TouchableOpacity>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  img:{
    width: 250,
    height: 250,
    position: 'relative',
    left: 70,
    top: 370,
  },
  texts:{
    textAlign: 'center',
    fontSize: 25,
    top: 170,
    color: '#dd7b22',
    fontStyle: 'italic',
  },
  BtnText:{
    color: '#000',
    textAlign: 'center',
    fontSize: 23,
    top: 5,
    fontWeight: 'bold',
  },
  Btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    top: 400,
    alignSelf: 'center',
    backgroundColor: '#dd7b22',
  },
  BtnArea:{
    flex: 1,
  },
});