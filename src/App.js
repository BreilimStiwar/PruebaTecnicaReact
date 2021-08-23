import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Posts from './components/Posts'

class App extends React.Component{

  render(){
    return <div>
      <Router>
        <Route path='/' component={Posts}/>
      </Router>
    </div>
  }
}

















// function HelloWorld(props){
//   return (
//     <div id='hello'> <h3>{props.subtitle}</h3> {props.mytext}</div>
//   );
// }

// class HelloWorld extends React.Component{

//   state = {
//     show: true
//   }

//   toggleShow = () => {
//     this.setState({show: !this.state.show})
//   }

//   render(){
//     if (this.state.show){
//       return (
//         <div id='hello'> 
//           <h3>{this.props.subtitle}</h3> 
//           {this.props.mytext}
//           <button onClick={this.toggleShow}>Toggle Show</button>
//         </div>
//       );
//     }else{
//       return <h1>
//         No elementos
//         <button onClick={this.toggleShow}>Toggle Show</button>
//       </h1>

//     }
    
//   };
// }

// // const App = () => <div>This is my component: <HelloWorld/> </div>

// // class App extends React.Component{
// //   render(){
// //     return <div>This is my component <HelloWorld/> </div>
// //   }
// // }

// function App() {
//   return (
//     <div>
//       This is my component: 
//       <HelloWorld mytext='Hello Fazt' subtitle='Lorem ispum' /> 
//       <HelloWorld mytext='Hello !!!!' /> 
//       <HelloWorld mytext='Hola Mundo' /> 
//     </div>
//   );
// }

export default App;
