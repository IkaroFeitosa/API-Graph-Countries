import React, { Component } from 'react';
import { SearchIcon } from '@heroicons/react/outline'
import CardCountries from '../components/CardCountries'
import ModalEdit from '../components/ModalEdit'
import { getAllCountries } from '../api/Api'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as countryActions from '../actions/country'

class Home extends Component {
    state = {
        currentCountry: [],
        nameSearch: null
    }
    async componentDidMount() {
        const res = await getAllCountries();
        if (res.data.Country) {
            this.props.initData(res.data.Country);
        }

    }

    searchCountry = (name) => {
        const { countries } = this.props.country
        const value = name.target.value;
        let countriesSearch = countries.filter(c => c.name.toUpperCase().includes(value.toUpperCase()));

        this.setState({ currentCountry: countriesSearch, nameSearch: value });

    }

    render() {
        const { countries, modal } = this.props.country;
        let listCountries = countries;

        const { currentCountry, nameSearch } = this.state;

        if ((nameSearch !== null) && (nameSearch !== '') && currentCountry.length) {
            listCountries = currentCountry;
        }
        if (modal) {
            return (
                <div className='modalArea mt-10'>
                    {
                       <ModalEdit />
                    }
                </div>
            )
        }

        return (
            <main className="grid place-items-center min-h-screen  md:px-32 sm:px-8 py-8">
                <header>
                    <div className="relative text-gray-600">
                        <input type="search" name="serch" value={nameSearch ? nameSearch : ''} onChange={this.searchCountry} placeholder="Buscar país" className="bg-white h-10 w-96 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <SearchIcon className="h-5 w-5 text-blue-500" />
                        </button>
                    </div>
                </header>
                <div>
                    <h1 className="text-5xl sm:text-3xl md:text-5xl font-bold text-gray-200 mb-10">Países</h1>
                    <section className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-12">
                        {
                            listCountries.length ? listCountries.map((element,index) => (<CardCountries key={element.name} index={index} data={element} />)) : 'Nenhum país encontrado :('
                        }
                    </section>
                </div>
            </main>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators(countryActions, dispatch);
const mapStateToProps = state => ({
    country: state.country
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);