import React from 'react';

 const Child=(list)=> {
    console.log("Child component rendered!")
    return (
        <div>
            <h3>Child Component</h3>

            <button onClick={list.submitevent} style={{ marginLeft: '10px' }}>Add</button>

            {list.data.map((item, ind) => (
                <div key={ind}>{item}</div>
            ))}

        </div>
    );
}
export default React.memo(Child);