'use client'
// import { robots } from "./robots";
import { useState, createContext, useContext, useEffect } from "react"

const RobotsContext = createContext();
export function useRobotsContext() {
    return useContext(RobotsContext);
}

export default function RobotsContextProvider({ children }) {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function handleChange(e) {
        setSearchInput(e.target.value.toLowerCase());
    }

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, []);

    if (isLoading) return <p className="text-white">Loading...</p>

    let robots = [];

    if (Array.isArray(data)) {
        data.map(robot => {
            let {username, phone, company, website, address, ...user} = robot;
            robots.push(user);
        })
    }

    return (
        <RobotsContext.Provider
            value={{ robots: searchInput ? robots.filter(robot => robot.name.toLowerCase().includes(searchInput)) : robots}}
        >
            <input 
            className="p-3 border rounded bg-blue-100 my-6"
            type="search" 
            placeholder="Search Robots"
            onChange={handleChange}
            />
            {children}
        </RobotsContext.Provider>
    )
}