import React, { Component } from 'react';
import { ViewListIcon} from '@heroicons/react/outline'
import {
    Link
  } from "react-router-dom";

class CardCountries extends Component {
    
    render() {
        const {data} = this.props;
        console.log('dados: ',data);
        return (
            <div className="bg-gray-900 shadow-lg rounded p-3">
                <div className="group relative">
                <img className="w-full md:w-72 block rounded" src={data.flag.svgFile} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <Link to="/Countries" title="Ver detalhes">
                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <ViewListIcon className="h-10 w-10" />
                        </button>
                    </Link>
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

export default CardCountries;