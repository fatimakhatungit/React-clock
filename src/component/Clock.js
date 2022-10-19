import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';



class Clock extends React.Component {
    state ={date: new Date() }; 

        componentDidMount(){
            this.clockTimer = setInterval(() => {
                this.setState({
                    date: new Date(), 
                });
            }, 1000);
        }

            componentWillUnmount() {
                clearInterval(this.clockTimer);
            }
        tick() {
            this.setState({
                date: new Date(),
            });
        }
  render(){
    return ( 
      <h1 className='heading'> 
        <span className='text'> {this.state.date.toLocaleTimeString(this.props.locale)}</span> 
      </h1>  
    );
  }
}


export default Clock;