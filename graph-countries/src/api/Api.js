import axios from 'axios'

const urlApiCoutries = "https://countries-274616.ew.r.appspot.com/";

export async function getAllCountries (){
    let data;
    if(await getCountCountries() > 0)
      return getLocalCountries();
    
    await axios({
        url: urlApiCoutries,
        method: 'post',
        data: {
          query: `
            query {
                Country {
                    name
                    nativeName
                    capital
                    area
                    population
                    flag {
                      svgFile
                    }
                    topLevelDomains {
                      name
                    }
                    location {
                      latitude
                      longitude
                    }
                }
            }
            `
        }
      }).then((result) => {
        //console.log(result.data)
        data = result.data;
        if(data.data.Country !== getCountCountries()){
          localStorage.setItem('AllCountries', JSON.stringify(data.data.Country) )
          localStorage.setItem('NumCountries', data.data.Country.length )
        }
      });
    return data; 
      
}
export async function getLocalCountries (){
    return {data:{Country:JSON.parse(localStorage.getItem('AllCountries'))}};
}
export async function getCountCountries (){
    return JSON.parse(localStorage.getItem('NumCountries'));
}
export async function setLocalCountries (data){
  await localStorage.setItem('AllCountries', JSON.stringify(data) )
}

