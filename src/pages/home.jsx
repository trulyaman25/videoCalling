import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(
        (e) => {
            e.preventDefault();
            if (value.trim()) {
                navigate(`/room/${value}`);
            } else {
                alert("Please enter a valid room ID.");
            }
        },
        [value, navigate]
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleJoinRoom} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-xl font-semibold text-gray-700 text-center">
                    Join a Room
                </h2>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Room ID"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Enter
                </button>
            </form>
        </div>
    );
}

export default Home;
