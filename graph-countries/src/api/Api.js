import axios from 'axios'

const urlApiCoutries = "https://countries-274616.ew.r.appspot.com/";

export async function getAllCountries (){
    let data;
    await axios({
        url: 'https://countries-274616.ew.r.appspot.com/',
        method: 'post',
        data: {
          query: `
            query {
                Country {
                    name
                    capital
                    flag {
                      svgFile
                    }
                }
            }
            `
        }
      }).then((result) => {
        //console.log(result.data)
        data = result.data; 
      });
    return data; 
      
}
