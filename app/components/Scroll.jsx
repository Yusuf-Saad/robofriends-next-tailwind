export default function Scroll({ children }) {
    return (
        <div className="overflow-scroll border-2 border-black h-[800px] hide-scrollbar">
            {children}
        </div>
    )
}