import axios from 'axios';
import React, { useState } from 'react';

const SubmitTour = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/schedule-tour', {
                name,
                email,
                phone,
                message,
                date
            });
            setSuccessMessage('Form submitted successfully');
            setErrorMessage(''); // Clear any previous error message
            setName(''); // Clear form fields
            setEmail('');
            setPhone('');
            setMessage('');
            setDate('');
            console.log(res);
        } catch (error) {
            setErrorMessage('Error submitting form');
            setSuccessMessage(''); // Clear any previous success message
        }
    };

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <h2 className="text-2xl font-bold mb-2">Schedule a Tour</h2>
                {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
                {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 border rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="p-2 border rounded-md"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Date"
                        className="p-2 border rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        className="p-2 border rounded-md md:col-span-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-md md:col-span-2">
                        Submit Request
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubmitTour;
