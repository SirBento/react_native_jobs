import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch =(endpoint,query) =>{

    const [data, setData] = useState([]);
    const [isLoding,setIsLoading] = useState(false);
    const [ error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '84b91d4eedmsh86fb198968fee8bp1b512bjsnd5878ade161b' ,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () =>{

        setIsLoading(true);

        try{
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false)

        } catch(error){

            setError(error)
            alert('There is an error')
            
        } finally{

            setIsLoading(false)
        }

       
      }

      useEffect(()=>{

        fetchData();

    }, []);


    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return{ data, isLoding,error, refetch};
}

export default useFetch ;