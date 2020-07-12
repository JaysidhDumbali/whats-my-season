import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

class App extends React.Component {
    state = {lat: null, err: ''}

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat:position.coords.latitude })
            },
            (err) => {
                this.setState({err: err.message})
            }
        );

    };

    renderContent(){
        if (!this.state.lat && this.state.err){
            return (
                <ErrorPage message="Oh No! Unable to get location" />
             );
        };

        if (this.state.lat && !this.state.err){
            return (
                <SeasonsDisplay lat={this.state.lat} />
            );
            
        };

        return (<Spinner message="Please accept the location request" /> );
    }
    render()
    {
        return(
           <div>{this.renderContent()}</div>
        );
    };
};

ReactDOM.render(<App/>, document.querySelector('#root'));
