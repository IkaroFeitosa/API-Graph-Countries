const inital_state = {
    count_countries:0,
    countries:[]
}

export default function country(state = inital_state,action){
    switch(action.type){
        case 'INIT_COUNTRIES':
            if(action.data)
                return {...state,count_countries:action.data.length,countries:action.data}
            else return state;
        default:
            return state;
    }
}