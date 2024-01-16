import React, { useState } from 'react'
import './App.css';

const Itemsdata = [
  {
    name :"Hitesh", key:1
  },
  {name:"kalpesh", key:2},
  {name : "sandesh", key:3},
  {
    name :"bhaiya", key:4
  },
  {
    name :"bhai", key:5
  },
  {
    name :"bhya", key:6
  }
]
const Assignment = ({options}) => {
    const [inputValue, setInputValue]= useState("");
    const [tags, setTags]= useState([]);
    const addTags =(e)=>{
        if(e.keyCode === 13 && inputValue ){
            // alert(inputValue)
            setTags([...tags, inputValue])

            setInputValue("")
    //        
        }
    }
    const removeTags =(val)=>{
        let remain = tags.filter((t)=> t !==val)
        console.log(val)
       setTags(remain)
    }
    const onSearch =(searchItem)=>{
    setInputValue(searchItem)
      console.log("search",searchItem)
    }

    
 
  return (
    <div >
      <div style={{
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    marginTop:"50px"
}}>
        <div className='content' style={{ borderBottom:"3px solid blue",  width:"80%", alignItems:"center", textAlign:"center", display:"flex", alignContent:"center",justifyContent:"center"}}>
           {tags.map((item, index)=>{
           return <div key={index} style={{display:"flex",flexDirection:"row", marginRight:"5px"}}>
            <div key={item} style={{display:"flex",flexDirection:"row",padding:"3px",backgroundColor:"lightgray", borderRadius:"10px", alignItems:"center", height:"30px" }}>
                <p style={{backgroundColor:"lightgray"}}>
                    {item}
                </p>
                <button key={index} onClick={()=>removeTags(item)}style={{ backgroundColor:"transparent", border:"none" , cursor:"pointer"}}>x</button>
                </div>
                </div>
           })}
            <input type='text' value={inputValue} placeholder='.. add new ' style={{ backgroundColor:"transparent", border:"none",outline:"none"}}
            onChange={(e)=>{
                setInputValue(e.target.value)
            }} onKeyDown={addTags}></input>
        </div>
        <div style={{backgroundColor:"lightgray", width:"50%", alignItems:"centers", textAlign:"center",}}>
            {inputValue &&
            Itemsdata.filter(item=>{
              const searchItem = inputValue.toLowerCase();
              const name = item.name.toLowerCase()
              return searchItem && name.startsWith(searchItem) && name !== searchItem
            }).map((item, index)=>{
              return  <div onClick={()=>onSearch(item.name)} style={{alignItems:"center",}} key={index}>
                {item.name}</div>
            })}
        </div>
      </div>
    
    </div>
  )
}

export default Assignment
