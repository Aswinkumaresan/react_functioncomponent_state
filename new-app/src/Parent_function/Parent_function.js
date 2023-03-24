import React from 'react'
import Parent_functionCss from './Parent_function.css'
import Child_function from '../Child_function/Child_function'


const Parent_function = () => {
    
const books = [
    { name:"You Are Born to Blossom",
    year : 2011
    },
    { name:"Spirit of India",
    year :2013
    },{ name:" Governance for Growth in India",
    year : 2014
    },{ name:"The Family and the Nation",
    year :2015
    },{ name:"  Mission of India",
    year :2005
    },{ name:"Wings of fire",
    year : 1999
    },{ name: "You are Unique:",
    year :2012
    }
    ];

  return (
    <div>Parent_function
    <Child_function arr={books}/>

    </div>
    
  )
}

export default Parent_function