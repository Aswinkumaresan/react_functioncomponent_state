import React, { Component } from 'react'

export class ChildClass extends Component {
    
    filterdata(){
        let datafiltered= this.props.arr.filter((ele)=> 
        ele.year>2014)
        console.log(datafiltered);
    }
    
    
    render() {
      console.log("this",this.props);

    return (
      <div>ChildClass
        {this.props.arr.map((n,index)=>
        <h1 key={index}>{n.year}{n.name}</h1>
        )}
       <button onClick={this.filterdata.bind(this)}>Filter Data</button>

      </div>
    )
  }
}

export default ChildClass