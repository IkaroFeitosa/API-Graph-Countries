const inital_state = {
    count_countries:0,
    countries:[],
    countrySelected: null,
    modal:false,
    index:null,
    editCountry:null,
    pg: 'Home'
}

export default function country(state = inital_state,action){
    if(!action.data)
         return state;

    switch(action.type){
        case 'INIT_COUNTRIES':
            return {...state,count_countries:action.data.length,countries:action.data}
        case 'SELECT_COUNTRY':
            return {...state,countrySelected:action.data.country,pg:action.data.pg}
        case 'EDIT_COUNTRY':
            return {...state,editCountry:action.data.country,modal:action.data.modal,index:action.data.index}
        case 'SAVE_EDIT_COUNTRY':
            return {...state,editCountry:action.data.country,modal:action.data.modal}
        case 'EDIT_COUNTRY_NAME':
            return {...state,editCountry:{...state.editCountry,name:action.data.name}}
        case 'EDIT_COUNTRY_CAPITAL':
            return {...state,editCountry:{...state.editCountry,capital:action.data.capital}}
        case 'EDIT_COUNTRY_LONGITUDE':
            return {...state,editCountry:{...state.editCountry,location:{...state.editCountry.location,longitude:action.data.longitude}}}
        case 'EDIT_COUNTRY_LATITUDE':
            return {...state,editCountry:{...state.editCountry,location:{...state.editCountry.location,latitude:action.data.latitude}}}
        case 'EDIT_COUNTRY_AREA':
            return {...state,editCountry:{...state.editCountry,area:action.data.area}}
        case 'EDIT_COUNTRY_POPULACAO':
            return {...state,editCountry:{...state.editCountry,population:action.data.population}}
        case 'EDIT_COUNTRY_DOMAIN':
            return {...state,editCountry:{...state.editCountry,topLevelDomains:[{name:action.data.domain}]}}
        case 'EDIT_COUNTRY_CANCEL':
            return {...state,modal:action.data.modal}
        default:
            return state;
    }
}