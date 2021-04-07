import React, { Component } from 'react';
import { ViewListIcon, PencilIcon} from '@heroicons/react/outline'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {  Redirect } from "react-router-dom";
import * as countryActions from '../actions/country'

class CardCountries extends Component {
    state = {
        pg: 'Home'
    }
    goCountry = () => {
        this.props.selectCountry({country:this.props.data,pg:'Country'})
    }
    goModal = () => {
        this.props.editCountry({country:this.props.data,modal:true,index:this.props.index})
    }
    render() {
        const {data} = this.props;
        if(this.props.country.pg !== this.state.pg)
            return (<Redirect to='/Countries' />);
        return (
            <div className="bg-gray-900 shadow-lg rounded p-3">
                <div className="group relative">
                <img className="w-full md:w-72 block rounded" src={data.flag.svgFile} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    
                    <button onClick={this.goCountry} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <ViewListIcon className="h-10 w-10" />
                    </button>

                    <button onClick={this.goModal} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <PencilIcon className="h-10 w-10" />
                    </button>
                 
                </div>
                </div>
                <div className="p-5">
                <h3 className="text-gray-900 text-lg">{data.name}</h3>
                <p className="text-gray-400">Capital: {data.capital}</p>
                </div>
            </div>  
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(countryActions,dispatch);
const mapStateToProps = state => ({
    country:state.country
  });
  export default connect(mapStateToProps,mapDispatchToProps)(CardCountries);