import { useState } from 'react'
const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const onClick: () => void = () => {
        setGuests([...guests, name]);
        setName('');
    }
    return (
        <div>
            <ul>
                {guests.map((guest: string) => (<li key={guest}>{guest}</li>))}
            </ul>
            <h3>Guest list</h3>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={onClick}>Add Guest</button>
        </div>
    );
}

export default GuestList;