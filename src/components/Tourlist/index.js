import React, {Component} from 'react'
import Tour from '../Tour'
import {tourData} from '../../tourData'
import './tourlist.scss'

export default class Tourlist extends Component {

    state={
        tours: tourData
    };

    removeTour =id=>{
        //console.log(id);        
        const {tours}=this.state;
        const sortedList= tours.filter(tour => tour.id!==id);

        this.setState({
            tours: sortedList
        });
    }

    render() {
        //const {tours}=this.state;
        return (
            <section className="tourlist">
                {
                    this.state.tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    ))
                }
            </section>
        )
    }
}
