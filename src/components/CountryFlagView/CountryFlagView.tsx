import {Image} from "@nextui-org/react";

// TODO migrate from public repo to cdn
const CountryFlagView = ({countryCode}: {countryCode: string}) => {

    return <Image
        alt={`${countryCode} flag`}
        width={20}
        height={20}
        radius='full'
        src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${countryCode}.svg`}
    />
}

export default CountryFlagView