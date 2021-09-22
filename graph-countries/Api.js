import axios from 'axios'

const urlApiCoutries = "https://countries.trevorblades.com/"; //"https://countries-274616.ew.r.appspot.com/"; Api Antiga que parou de funcionar
const queryAnt =`
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
`;
const queryAtu= `
query {
  countries{
    code
    name
    native
    capital
  }
}
`;

export async function getLocal(name){
  let data;
  const raw = `
    {
      "country": "${name}"
    }
  `;
  await axios({
    url:'https://countriesnow.space/api/v0.1/countries/positions',
    method: 'post',
    body: raw
  }).then((result) => {
    console.log(result)
    data = result.text;
  });
return data; 
}

export async function getAllCountries (){
    let data;
    if(await getCountCountries() > 0)
      return getLocalCountries();
    
    await axios({
        url: urlApiCoutries,
        method: 'post',
        data: {
          query: queryAtu
        }
      }).then((result) => {
        //console.log(result.data)
        data = result.data;
        if(data.data.countries !== getCountCountries()){
          localStorage.setItem('AllCountries', JSON.stringify(data.data.countries) )
          localStorage.setItem('NumCountries', data.data.countries.length )
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

