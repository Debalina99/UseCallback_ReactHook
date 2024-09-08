import React,{memo} from 'react';

 function Heading(){
    console.log("Heading component rendered!")
    return(
        <div>
            <h3>Heading Component</h3>
        </div>
    )
}
export default React.memo(Heading);