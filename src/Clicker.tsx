import { useState } from 'react'

function Clicker() {
    let [count, setCount] = useState(0);

    return (
            <>
                <button onClick={() => setCount(prev => prev + 1)}
                    className="text-white bg-gray-500 p-1 rounded-sm mt-4">Counter {count}
                </button>
            </>
    )
}

export default Clicker