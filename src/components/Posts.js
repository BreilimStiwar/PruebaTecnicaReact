import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import tempImage from '../img/temp.png';

import './Post.css';

export default class Posts extends Component {

    state = {
        dataAPI: [],
        temp:0,
        humidity:0,
        speed:0,
        name:''
    }

    async componentDidMount(){
        await this.fetchExercises();
    }  

    fetchExercises = async () => {
        const res  = await fetch('http://localhost:3000/api/weathers',);
        const data = await res.json()
        this.setState({dataAPI:data});
        const { dataAPI }  = this.state;
        const dataTemp     = dataAPI['main'].temp;
        const dataHumidity = dataAPI['main'].humidity;
        const dataSpeed    = dataAPI['wind'].speed;
        const dataCountry  = dataAPI['name'];
        this.setState({temp:dataTemp,humidity:dataHumidity,speed:dataSpeed, name:dataCountry});
    }

    render() {
        const { temp }     = this.state;
        const { humidity } = this.state;
        const { speed }    = this.state;
        const { name }     = this.state;
        return (
            <div className='center'>
                <div className='container'>
                    <div className='img'></div>
                    <div className='top'>
                        <h2 style={colorH}>SANTIAGO DE CALI</h2>
                        <h3 style={colorH}>16 de Abril 2021</h3> 
                        <h1 style={colorH}>31°</h1>
                    </div>
                    <div className='clima'>
                        <div className='contentClima'>
                            <p className='textClima'><b>Clima</b> / Soleado</p>
                        </div>
                    </div>
                    <div className='sub-container'>
                        <div className='temp'>{temp}</div>
                        <div className='humidity'></div>
                        <div className='wind'></div>
                    </div>
                    <div >
                        <p>Temperatura {temp}</p>
                        <p>Húmedad {humidity}</p>
                        <p>Velocidad de Viento {speed}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

const colorH = {
    color: '#0000ff',
}
