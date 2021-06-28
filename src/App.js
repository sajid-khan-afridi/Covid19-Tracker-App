import React, { useEffect,useState } from 'react';
import {Cards, Chart, CountryPicker} from './components/index'
import styles from './App.module.css';
import {fetchData} from './api'


function App() {

  const [data,setData]=useState({});
  //const [country,setCountry]=useState('');
  const [isFetched,setFetched]=useState(false);

   useEffect(async()=>{
    //  const data =await fetchData();
    //  console.log(data)
    const getData=async ()=>{
    const fetchedData=await fetchData();
    setData(fetchedData);
    }

    // if(!isFetched){
    //   getData();
    //   setFetched(true);
    // }
  },[isFetched])

  return (
    <div className={styles.container}>
       <Cards data={data}/>
       <CountryPicker />
       <Chart />
    </div>
  );
}

export default App;

