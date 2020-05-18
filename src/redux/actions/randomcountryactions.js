// random country actions
export const  GET_COUNTRIES ="GET_COUNTRIES"
export const SET_LOADING = "SET_LOADING"
export const  GET_COUNTRIES_RANDOM ="GET_COUNTRIES_RANDOM"


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
            randomCountryList.push(data[Math.floor(Math.random() * data.length-1)])       
        }
        dispatch({type :GET_COUNTRIES_RANDOM,payload:randomCountryList})
    }
}