// random country actions
export const  GET_COUNTRIES ="GET_COUNTRIES"
export const SET_LOADING = "SET_LOADING"
export const  GET_COUNTRIES_RANDOM ="GET_COUNTRIES_RANDOM"
export const  GET_COUNTRY_DETAIL ="GET_COUNTRY_DETAIL"
export const  SELECT_COUNTRY ="SELECT_COUNTRY"


// action creators
export const setLoading = (value) =>{
    return {type:SET_LOADING,payload:value};
}
export const getCountries= () =>{
    return async function(dispatch){
        dispatch(setLoading(true));
        const response = await fetch("https://api.covid19api.com/countries");
        const data = await response.json();
        dispatch({type :GET_COUNTRIES,payload:data})
        console.log(data);
    }
}

export const getCountriesRandom = (value) =>{
    return async function(dispatch){
        dispatch(setLoading(true));
        let randomCountryList = [];
        const response = await fetch("https://api.covid19api.com/countries");
        const data = await response.json();
        for (let index = 0; index < value; index++) {
            let randomNumber = Math.floor(Math.random() * data.length-1)
            if(randomCountryList.indexOf(data[randomNumber]) === -1){
                randomCountryList.push(data[randomNumber]);  
            }
        }
        dispatch({type :GET_COUNTRIES_RANDOM,payload:randomCountryList})
    }
}

export const getCountryDetail = (country) =>{
    return async function(dispatch){
        console.log(country)
        dispatch(setLoading(true));
        const response = await fetch( `https://api.covid19api.com/total/dayone/country/${country}`);
        const data = await response.json();
        dispatch({type :GET_COUNTRY_DETAIL,payload:data.slice(data.length-10, data.length-1).reverse()});
        dispatch({type:SELECT_COUNTRY,payload:country});
        console.log(data.length-5, data.length-1);
        //TO DO length control
    }
}
