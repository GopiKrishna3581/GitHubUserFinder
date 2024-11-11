import UserSearch from "./search-input.jsx";

export default function Hero() {
    return (
        <div className="lg:m-12 m-6 mx-8 h-[70vh] border border-gray-500 py-6  rounded-2xl">
            <div className="flex mx-9 items-center justify-center">
                <UserSearch />
            </div>
        </div>
    )
}
