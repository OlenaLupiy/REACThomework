import {Address} from "../Address";
import {Company} from "./Company";

export function User({user}) {

    return (
        <div>

<h1>{user.id}-{user.name}</h1>

            <Address xxx={user} />


        </div>
    )
}