import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as countryActions from '../actions/country'
import { setLocalCountries,getLocal } from '../api/Api'


class ModalEdit extends Component {

    saveDataModal = async () => {

        let {countries, index} = this.props.country;
        countries[index] = this.props.country.editCountry;
        let newlist = countries;
        await setLocalCountries(newlist);
        this.props.saveEditCountry({country:this.props.country,modal:false})

        return false
    }

    cancelDataModal = async () => {
       
        this.props.cancelEditCountry({modal:false})

        return false
    }

    render() {
        let {editCountry} = this.props.country;
        // inseri manual pq a api orignal parou de funcionar
        const latitude = -24;
        const longitude = 53;


        return (
            <div>

                <section className="h-screen bg-gray-100 bg-opacity-50">
                    <form className="container max-w-md mx-auto shadow-md md:w-3/4">
                        <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                                <div className="inline-flex items-center space-x-4">
                                    <a href="#" className="block relative">
                                        <img alt="profil" src={"https://flagcdn.com/160x120/"+editCountry.code.toLowerCase()+".png"} className="mx-auto object-cover rounded-full h-16 w-16 " />
                                    </a>
                                    <h1 className="text-gray-600">
                                        {editCountry.name}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 bg-white">
                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Nome 
                                </h2>
                                <div className="max-w-sm mx-auto md:w-2/3">
                                    <div className=" relative ">
                                        <input type="text" id="country-info-name" onChange={this.props.editCountryName} value={editCountry.name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Localização
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-lat" onChange={this.props.editCountryLatitude} value={latitude} placeholder="Latitude" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-long" onChange={this.props.editCountryLongitude}  value={longitude} placeholder="Longitude" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Capital
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-capital" onChange={this.props.editCountryCapital} value={editCountry.capital} placeholder="Capital" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <hr/>

                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Área
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-area" onChange={this.props.editCountryArea} value={editCountry.area} placeholder="Área" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    População
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-population" onChange={this.props.editCountryPopulacao} value={editCountry.population} placeholder="População" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-1/3">
                                    Top-level domain
                                </h2>
                                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                    <div>
                                        <div className=" relative ">
                                            <input type="text" id="country-info-domain" onChange={this.props.editCountryDomain} value={editCountry.name} placeholder="Área" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-16  pb-4 ml-auto flex  flex-row text-gray-500 md:w-1/3">
                                
                                <button onClick={this.cancelDataModal} className="py-2 px-4  hover:text-yelow-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Cancelar
                                </button>
                                <button onClick={this.saveDataModal} className="py-2 px-4 mx-4  hover:text-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(countryActions, dispatch);
const mapStateToProps = state => ({
    country: state.country
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);