import React from 'react'
// import ChildFunCss from './CHild_function.css'

const Child_function = (props) => {
    console.log("props",props);
    
function filterData(sample)
{
    let datafiltered= props.arr.filter((e)=>
    e.year>2014) ;
    console.log(datafiltered);
        
}
  return (
    <div>Child_function
       
        {props.arr.map((n,index)=>

        <h1 key={index}>{n.name }{n.year} </h1>)
        }
        <button onClick={()=>filterData()}>Filter Data</button>
            </div>

        
  )
}

export default Child_function