export function initData(data){
    return {
        type:'INIT_COUNTRIES',
        data
    }
}
export function selectCountry(data){
    return {
        type:'SELECT_COUNTRY',
        data
    }
}
export function editCountry(data){
    return {
        type:'EDIT_COUNTRY',
        data
    }
}
export function editCountryName(val){
    return {
        type:'EDIT_COUNTRY_NAME',
        data:{name: val.target.value}
    }
}
export function editCountryCapital(val){
    return {
        type:'EDIT_COUNTRY_CAPITAL',
        data:{capital: val.target.value}
    }
}
export function editCountryLongitude(val){
    return {
        type:'EDIT_COUNTRY_LONGITUDE',
        data:{longitude: val.target.value}
    }
}
export function editCountryLatitude(val){
    return {
        type:'EDIT_COUNTRY_LATITUDE',
        data:{latitude: val.target.value}
    }
}
export function editCountryArea(val){
    return {
        type:'EDIT_COUNTRY_AREA',
        data:{area: val.target.value}
    }
}
export function editCountryPopulacao(val){
    return {
        type:'EDIT_COUNTRY_POPULACAO',
        data:{population: val.target.value}
    }
}
export function editCountryDomain(val){
    return {
        type:'EDIT_COUNTRY_DOMAIN',
        data:{domain: val.target.value}
    }
}
export function saveEditCountry(data){
    return {
        type:'SAVE_EDIT_COUNTRY',
        data
    }
}
export function cancelEditCountry(data){
    return {
        type:'EDIT_COUNTRY_CANCEL',
        data
    }
}