export default function SearchBar() {
    return (
        <div className="w-fit flex justify-between items-center">
            <input
                type="text"
                placeholder="ابحث عن..."
                className="w-full border-l border-y border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r-full"
            >   
                البحث
            </button>
        </div>
    );    
}