function loginForm() {
    return (
        <>
            <form action="">
                <div className="flex gap-2 mt-4">
                    <input className="border p-1" type="email" name="email" placeholder="email@gmail.com" id="" />
                    <input className="border p-1" type="password" placeholder="password" name="password" id="" />
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="text-white bg-gray-500 p-1 rounded-sm">Login</button>
                    <button className="text-white bg-gray-500 p-1 rounded-sm">Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default loginForm