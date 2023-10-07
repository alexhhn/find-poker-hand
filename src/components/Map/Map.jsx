import React from 'react'

function Map() {
    const drawerContent = [];  

    function List(props) {  
        const array = props.drawerContent;  
        const listItems = array.map((e) =>  
          <li>{e}</li>  
        );  
        return (  
          <div>  
                <h2>Map</h2>  
                <ul>{listItems.length ? listItems : 'none'}</ul>  
          </div>  
        );  
      }  

  return (
   <List drawerContent={drawerContent}/>
  )
}

export default Map