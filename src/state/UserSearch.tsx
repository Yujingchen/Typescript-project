import { useState } from 'react'
interface User {
    name: string,
    age: number
}
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<User | undefined>();
    // const [guests, setGuests] = useState<string[]>([]);
    const users: { name: string, age: number }[] = [{
        name: 'tonny', age: 20
    }, {
        name: 'joe', age: 20
    }, {
        name: 'matt', age: 20
    }
    ]
    const onClick: () => void = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser)
        console.log(foundUser)
    }
    return (
        <div>
            <h3>Find User</h3>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={onClick}>Find</button>
            <div>{user && user.name}</div>
            <div>{user && user.age}</div>
        </div>
    );
}

export default UserSearch;