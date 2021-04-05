import React, { Component } from 'react';
import { SearchIcon} from '@heroicons/react/outline'
import CardCountries from '../components/CardCountries'
import {getAllCountries,getLocalCountries} from '../api/Api'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as countryActions from '../actions/country'

class Home extends Component {
    state = {
        currentCountry : [],
        nameSearch: null
    }
    async componentDidMount(){
        const res =  await getAllCountries();
        //console.log('res data: ', res.data.Country);
        if(res.data.Country){
            console.log('res data: ', res.data.Country);
            this.props.initData(res.data.Country);
            //this.setState({allCountries:res.data.Country});
        }
        
    }

    searchCountry =  (name) =>{
        const {countries} = this.props.country
        let countriesSearch =  countries.filter(c => c.name === name.target.value);

        this.setState({currentCountry:countriesSearch});

    }

    render() {
        const {countries} = this.props.country;
        console.log('restorno dos dados = ',countries);
        return (
                <main className="grid place-items-center min-h-screen  md:px-32 sm:px-8 py-8">
                    <header>
                        <div className="relative text-gray-600">
                        <input type="search" name="serch" value={this.state.nameSearch} onChange={this.searchCountry} placeholder="Buscar país" className="bg-white h-10 w-96 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <SearchIcon className="h-5 w-5 text-blue-500"/>
                        </button>
                        </div>
                    </header>
                    <div>
                       <h1 className="text-5xl sm:text-3xl md:text-5xl font-bold text-gray-200 mb-10">Países</h1>
                       <section className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-12">
                       {
                           countries.length?countries.map(element => (<CardCountries key={element.name} data={element}/>)):'Nenhum país encontrado :('
                       }
                       </section>
                    </div>
                </main>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(countryActions,dispatch);
const mapStateToProps = state => ({
    country:state.country
  });
  export default connect(mapStateToProps,mapDispatchToProps)(Home);