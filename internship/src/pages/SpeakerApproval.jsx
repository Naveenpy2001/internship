import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Speaker.css';
import api from '../service/api';

const SpeakerList = () => {
    const [speakers, setSpeakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const speakersPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                const response = await api.get('http://127.0.0.1:8000/api/speakers/');
                setSpeakers(response.data);
            } catch (err) {
                setError('Failed to fetch speakers.');
            } finally {
                setLoading(false);
            }
        };
        fetchSpeakers();
    }, []);

    const handleAction = async (id, status) => {
        const confirmMsg = `Are you sure you want to ${status} this speaker?`;
        if (!window.confirm(confirmMsg)) return;

        try {
            await api.patch(`http://127.0.0.1:8000/api/speakers/${id}/`, {
                status,
            });
            setSpeakers(prev =>
                prev.map(s => (s.id === id ? { ...s, status } : s))
            );
            alert(`Speaker ${status} successfully.`);
        } catch (err) {
            alert(`Failed to ${status} speaker.`);
        }
    };

    // Pagination logic
    const indexOfLastSpeaker = currentPage * speakersPerPage;
    const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
    const currentSpeakers = speakers.slice(indexOfFirstSpeaker, indexOfLastSpeaker);
    const totalPages = Math.ceil(speakers.length / speakersPerPage);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="speaker-table-container">
            <h2>Speaker Applications</h2>
            <table className="speaker-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Topic</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSpeakers.map((speaker) => (
                        <tr key={speaker.id}>
                            <td>{speaker.name}</td>
                            <td>{speaker.email}</td>
                            <td>{speaker.phone}</td>
                            <td>{speaker.topic}</td>
                            <td>
                                <span className={`badge ${speaker.status}`}>
                                    {speaker.status}
                                </span>
                            </td>
                            <td>
                                {speaker.status === 'pending' ? (
                                    <>
                                        <button
                                            className="approve-btn"
                                            onClick={() => handleAction(speaker.id, 'approved')}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="reject-btn"
                                            onClick={() => handleAction(speaker.id, 'rejected')}
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <span>{speaker.status}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default SpeakerList;
