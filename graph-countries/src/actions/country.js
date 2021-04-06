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