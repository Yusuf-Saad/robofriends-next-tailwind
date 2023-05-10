export default function Card({ id, name, email }) {
    return (
        <div className="text-center bg-green-300 p-3 rounded inline-block m-2 hover:scale-105 transition ease-in duration-300 drop-shadow-xl">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div className="pt-4">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}