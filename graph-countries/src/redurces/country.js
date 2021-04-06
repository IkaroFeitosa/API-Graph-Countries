const inital_state = {
    count_countries:0,
    countries:[],
    countrySelected: null,
    pg: 'Home'
}

export default function country(state = inital_state,action){
    switch(action.type){
        case 'INIT_COUNTRIES':
            if(action.data)
                return {...state,count_countries:action.data.length,countries:action.data}
            else return state;
        case 'SELECT_COUNTRY':
            if(action.data)
                return {...state,countrySelected:action.data.country,pg:action.data.pg}
        default:
            return state;
    }
}