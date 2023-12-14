import {useState} from "react";
import "./Country.css";
const Country = ({country, visitedHandle, handleFlags}) => {
    console.log(country, visitedHandle);
    const {name, flags, population, area} = country;
    const [visited, setVisited] = useState(false);
    const handle = () => {
        setVisited(!visited);
    };

    return (
        <div className={`box ${visited ? "visited" : "none"}`}>
            <h3 style={{color: visited ? "red" : "green"}}> name{name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>population:{population}</h4>
            <h4>area:{area}</h4>
            <button onClick={() => handleFlags(country.flags.png)}>flags</button>
            <button onClick={() => visitedHandle(country)}>Mark</button> <br />
            <button onClick={handle}>{visited ? "visited" : "going"}</button>
            {visited ? "ami visited" : "not visited"}
        </div>
    );
};

export default Country;
