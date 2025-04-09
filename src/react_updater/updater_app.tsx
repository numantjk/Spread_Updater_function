import {useState} from "react";

function UpdaterFunction() {
    const [updater, setUpdater] = useState({});



const handleUpdater=()=>{
    setUpdater(prev=>({a:1,b:2,c:4,...prev}));
}

    const handleRemove = () => {
        setUpdater(prev => {
            const {a,b,c,...rest } = prev;
            return rest;
        });
    };

return(
    <div>
        <h1> List Updater: {JSON.stringify(updater)}</h1>

        <button onClick={handleUpdater}>اضافه کردن :c</button>
        <button onClick={handleRemove}>remove</button>


    </div>



)
}




export default UpdaterFunction;