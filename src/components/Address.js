
import {Geo} from "./persons/Geo";

export function  Address({xxx}) {
return (
    <div className={'address'}>
        <p>{xxx.address.city}</p>
        <h6>Company: {xxx.company.catchPhrase}</h6>

        <Geo info={xxx}
        />
        {/*<h3>Address:</h3>*/}
        {/*<p>{street} {suite} {city}*/}
        {/*</p>*/}
        {/*<p>{zipcode}</p>*/}

        {/*<Geo lat={'-37.3159'}*/}
        {/*     lng={'81.1496'}/>*/}
    </div>
)
}

