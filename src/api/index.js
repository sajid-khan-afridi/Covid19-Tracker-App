import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData= async()=>{
    try {
        
        
        //const response=await axios.get(url);
        //return response;

        // const {data}=await axios.get(url);
        // const modifiedData={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate,
        // }
        //return modifiedData;


        // const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
        // const modifiedData={confirmed,recovered,deaths,lastUpdate,}
        // return modifiedData;

        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate,}
        
        
    } catch (error) {
        console.log(error)
    }
    
}