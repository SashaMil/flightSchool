import React, { Component } from 'react';
import axios from 'axios';
import Aux from './hoc/Aux';
import Header from './components/Header/Header';
import Display from './components/Display/Display';
import './App.css';

class App extends Component {

    state = {
        cities: [],
        currentCity: 0,
    };

    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate() {
        setTimeout(this.changeCity, 3000);
        console.log(this.state.cities[this.state.currentCity]);
    };

    refresh = () => {
        axios.get('/weather-reports')
            .then(response => {
                console.log(response.data);
                this.setState({
                    cities: response.data,
                    currentCity: 0,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    changeCity = () => {
        if (this.state.currentCity === this.state.cities.length - 1) {
            this.refresh();
        }
        else {
            let newCount = this.state.currentCity + 1;
            this.setState({
                currentCity: newCount,
            })
        }
    };


    render() {
        return(
            <Aux>
                <Header
                    cities={this.state.cities}
                    currentCity={this.state.currentCity}
                />
            {this.state.cities[this.state.currentCity] ? (
                <Display
                    currentCity={this.state.cities[this.state.currentCity]}
                />
            ): null }
            </Aux>
        );
    };

};

export default App;
