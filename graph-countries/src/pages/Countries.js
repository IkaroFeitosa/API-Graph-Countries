import React, { Component } from 'react';
import { ArrowLeftIcon} from '@heroicons/react/outline'
import { LocationMarkerIcon} from '@heroicons/react/solid'
import {  Redirect } from "react-router-dom";

import GoogleMapReact from 'google-map-react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as countryActions from '../actions/country'

const AnyReactComponent = () => <LocationMarkerIcon className=" h-10 w-10 text-red-500"/>;

class Countries extends Component {
    state = {
        pg: 'Country',
        key:"AIzaSyDKxQh2hncpyPMcyAYQy3b8HhNYrZKpcGI"
    }
    goHome = () => {
        this.props.selectCountry({country:null,pg:'Home'})
    }
    
    render() {
        const {countrySelected} = this.props.country;
        if(this.props.country.pg !== this.state.pg)
            return (<Redirect to='/Home' />);
        return (
            <div>  
                
                <section className="text-gray-600 body-font relative">
                    <button onClick={this.goHome} className=" absolute z-10 leftArrow ml-10 mt-10 mb-5 hover:scale-110 text-gray  transform translate-y-3 group-hover:translate-y-0 transition">
                            <ArrowLeftIcon className=" h-10 w-10 text-gray-500"/>
                    </button>
                    <div className="absolute inset-0 bg-gray-300 w-full h-full">
                        <GoogleMapReact
                        bootstrapURLKeys={this.state.key}
                        defaultCenter={{lat:countrySelected.location.latitude,lng:countrySelected.location.longitude}}
                        defaultZoom={5}
                        className="mapa"
                        >
                           <AnyReactComponent
                                lat={countrySelected.location.latitude}
                                lng={countrySelected.location.longitude}
                            />
                        </GoogleMapReact>
                        
                    </div>
                    <div className="container px-5 py-10 right-0 flex">
                        
                        <div className=" bg-yellow-300 flex items-center p-2 lg:p-2 overflow-hidden relative">
                            <div className=" max-w-min  rounded bg-white shadow-xl p-2 lg:p-8 mx-auto text-gray-800 relative md:text-left">
                                <div className="md:flex p-5 items-center -mx-4 flex-col">
                                    <div className="w-full  mb-10 md:mb-4">
                                        <div className="relative">
                                            <img src={countrySelected.flag.svgFile} className="w-full relative z-10" alt="" />
                                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                        </div>
                                    </div>
                                    <div className="w-full px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold uppercase text-2xl mb-5" >{countrySelected.name} <br /> ({countrySelected.nativeName})</h1>
                                            <div className="text-md">
                                                <ul>
                                                    <li className="text-gray">Capital: <span className="text-yellow-600" contentEditable>{countrySelected.capital}</span></li>
                                                    <li className="text-gray">Top-level domain: 
                                                        <ul>
                                                            {countrySelected.topLevelDomains.map(element => (
                                                                <li key={element.name}>
                                                                        <span className="text-yellow-600">{element.name}</span>
                                                                </li> 
                                                            ))}
                                                            
                                                        </ul>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl block leading-none align-baseline">Área </span>
                                                <span className="font-bold text-5xl leading-none align-baseline">{countrySelected.area}</span>
                                            </div>
                                            <div className="inline-block align-bottom mr-5">
                                                <span className="text-2xl block leading-none align-baseline">População </span>
                                                <span className="font-bold text-5xl leading-none align-baseline">{countrySelected.population}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> 
                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(countryActions,dispatch);
const mapStateToProps = state => ({
    country:state.country
  });
  export default connect(mapStateToProps,mapDispatchToProps)(Countries);