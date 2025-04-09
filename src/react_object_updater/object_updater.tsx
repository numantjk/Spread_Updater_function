import { useState } from 'react';

function SpreadUpdaterExample() {
    // Object state for user (name and age)
    const [user, setUser] = useState({ name: "Ali", age: 25 });

    // Array state for users with names and ages
    const [users, setUsers] = useState([]);

    // Input state for new name and age
    const [newUser, setNewUser] = useState("");
    const [newAge, setNewAge] = useState("");

    // Array state for fruits
    const [fruits, setFruits] = useState(["apple", "banana"]);

    // Input state for new fruit
    const [newFruit, setNewFruit] = useState("");

    // Update age in user object
    const updateAge = () => {
        setUser(prev => ({ ...prev, age: prev.age + 1 }));
    };

    // Add new user with name and special age
    const addUser = () => {
        if (newUser !== "" && newAge !== "") {
            setUsers(prev => [...prev, { name: newUser, age: parseInt(newAge) }]);
            setNewUser(""); // clear name input
            setNewAge(""); // clear age input
        }
    };

    // Add new fruit to array
    const addFruit = () => {
        if (newFruit !== "") {
            setFruits(prev => [...prev, newFruit]);
            setNewFruit(""); // Clear input
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>User Info (Object Updater Example)</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <button onClick={updateAge}>Increase Age</button>

            <hr />  <h2>Users List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}> Name: {user.name}<br/>
                        <li key={index}>Age: {user.age}</li>
                    </li>

                ))}
            </ul>
            <hr />


            <h2>Update Users</h2>
            <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Enter new name"
            />
            <input
                type="number"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
                placeholder="Enter special age"
            />
            <button onClick={addUser}>Add User</button>


            <hr />

            <h2>Fruits List</h2>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>

            <input
                type="text"
                placeholder="Enter new fruit"
                value={newFruit}
                onChange={(e) => setNewFruit(e.target.value)}
            />
            <button onClick={addFruit}>Add Fruit</button>
        </div>
    );
}

export default SpreadUpdaterExample;
