import React, { useState, useEffect } from 'react';
import './CreditCalculation.css';

const CreditCalculation = () => {
    const [credits, setCredits] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [newCredit, setNewCredit] = useState('');

    useEffect(() => {
        fetch('/api/credit-calculations/')
            .then(response => response.json())
            .then(data => setCredits(data));
    }, []);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleUpdateCredit = () => {
        if (!selectedStudent) return;
        fetch(`/api/credit-calculations/${selectedStudent.id}/update_credits/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ total_credits: newCredit }),
        })
        .then(response => response.json())
        .then(updatedCredit => {
            setCredits(credits.map(credit => credit.id === updatedCredit.id ? updatedCredit : credit));
            setNewCredit('');
            setSelectedStudent(null);
        });
    };

    const filteredCredits = credits.filter(credit =>
        credit.student_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="credit-calculation-container">
            <h1>Student Credit Calculation</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search student by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="credit-list">
                {filteredCredits.map(credit => (
                    <div
                        key={credit.id}
                        className={`credit-card ${credit.total_credits >= credit.required_credits ? 'eligible' : 'not-eligible'}`}
                        onClick={() => setSelectedStudent(credit)}
                    >
                        <h2>{credit.student_name}</h2>
                        <p>Current Credits: {credit.total_credits}</p>
                        <p>Required Credits: {credit.required_credits}</p>
                        <p>Status: {credit.total_credits >= credit.required_credits ? 'Eligible' : 'Not Eligible'}</p>
                    </div>
                ))}
            </div>

            {selectedStudent && (
                <div className="update-credit">
                    <h2>Update Credit for {selectedStudent.student_name}</h2>
                    <input
                        type="number"
                        placeholder="Enter new credit"
                        value={newCredit}
                        onChange={(e) => setNewCredit(e.target.value)}
                    />
                    <button onClick={handleUpdateCredit}>Update Credit</button>
                </div>
            )}
        </div>
    );
};

export default CreditCalculation;
