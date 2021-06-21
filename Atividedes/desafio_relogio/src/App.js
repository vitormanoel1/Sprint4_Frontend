import React from 'react';
import './App.css';

// define uma função DataFormatada que retorna o subtitulo com o valor da data formtada
function DataFormatada(props) {
  return <h2>Horário Atua: {props.date.toLocaleTimeString()}</h2>
}

// define a classe Clock que será chamada na remderização dentro do App 
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // define o estado date pegando a data/hora atual
      date : new Date()  
    };
  }

  // ciclo de vida que ocorre quando Clock é inserido na DOM
  // através da setInterval, o relógio é criado (com um timerID atrelado)
  // chama a função thick() a cada 1000 ms (1s)
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000 );

    // exibe no console o ID de cada relógio
    // quando isso ocorre, a função limpa o relógio criado pelo setInterval
    console.log("Eu sou o relógio" + this.timerID)
  }

  // ciclo de vida que ocorre quando o componente é removido da DOM
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  // define no state date a data atual cada vez que é chamada
  thick(){
    this.setState({
      date : new Date() 
    });
  }

  pause(){
    clearInterval(this.timerID)
    console.log(`Relógio ${this.timerID} pausado!`)
  }

  retornar(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000 );
    console.log(`Relógio ${this.timerID} retomado!`)
    console.log("Agora eu sou o relógio" + this.timerID)
  }

  // renderiza na tela o titulo 
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date ={this.state.date}/>
        <button style={{margin : "20px", backgroundColor : "red", color: "white", height : "25px", fontWeight: "600"}} onClick={() => this.pause()}>Pausar {this.timer}</button>
        <button style={{backgroundColor : "green", color : "white", height : "25px", fontWeight: "600"}} onClick={() => this.retornar()}>Retornar {this.timer}</button>
      </div>
    )
  }
}

// fução principal invocada no index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* faz a chamada de dois relógios para mostrar a independência destes*/}
        <Clock /> 
        <Clock />
      </header>
    </div>
  );
}

// declara que a função App poder ser usada fora do escopo dela mesma 
export default App;
