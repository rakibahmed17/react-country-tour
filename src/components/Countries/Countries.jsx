import {useEffect} from "react";
import {useState} from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlag] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }, []);
    const visitedHandle = (country) => {
        // console.log("add this country");
        const newCountry = [...visitedCountries, country];
        setVisitedCountries(newCountry);
    };
    const handleFlags = (flag) => {
        const newFlag = [...visitedFlags, flag];
        setVisitedFlag(newFlag);
    };
    return (
        <div>
            <h3>countries:{countries.length}</h3>
            <div>
                <h5>visited countries:{visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map((country) => (
                        <li key={country.cca3}>{country?.name?.common}</li>
                    ))}
                </ul>
            </div>

            <div>
                {visitedFlags.map((flag, idx) => (
                    <img key={idx} src={flag} alt="" />
                ))}
            </div>

            <div className="countries-container">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        visitedHandle={visitedHandle}
                        handleFlags={handleFlags}
                        country={country}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
