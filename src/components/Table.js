import React,{useState} from 'react'
import Data from './Data'


import "./table.css";

const Table = () => {

  const [search,setSearch]=useState("");
  return (
<>

<div className='search-box'>
      <input className='input-search' type="text" placeholder="search..." onChange={(e)=>{setSearch(e.target.value)}}/>
</div>
<br/>
<br/>




<div className='t-container' style={{overflowX:"auto",padding:"0 25px"}}>
  <table>
    <tr>
      <th>MARKET</th>
      <th>MINIMUM ORDER SIZE</th>
      <th>MAKER FEE</th>
      <th>TAKER FEE</th>
      <th>STATUS</th>
    </tr>
    {Data.filter((val)=>{
      if(search==="")
      {
        return val;
      }
      else if(val.market.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      {
        return val;
      }
    }).map((data,key)=>{
        return(
            <tr>
            <td>{data.market}</td>
            <td>{data.minimumordersize}</td>
            <td>{data.makerfee}</td>
            <td>{data.takerfee}</td>
            <td style={{color:"#019267"}}>{data.status}</td>
          </tr>
        )
    })}
  </table>
</div>
</>
  )

  
}

export default Table;
