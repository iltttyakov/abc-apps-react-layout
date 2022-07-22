import React, {useEffect} from 'react';
import SelectInput from "../../ui/inputs/SelectInput/SelectInput";
import {useSelector} from "react-redux";
import rootActions from "../../../redux/rootActions";

const CountriesSelect = (
    {
        label,
        name,
        control,
        multiple = true,
        disabled,
    }
) => {
    const countries = useSelector(state => state.auth.countries)

    useEffect(() => {
        if (!countries.length) rootActions.auth.getCountries()
    }, [])

    return (
        <SelectInput
            label={label}
            name={name}
            control={control}
            multiple={multiple}
            options={countries.map((country, index) => ({
                value: country.code, label: country.name
            }))}
            disabled={disabled}
        />
    );
};

export default CountriesSelect;