// src/components/DeployedContractsList.jsx
import React, { useEffect, useState } from "react";

const DeployedContractsList = () => {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch contracts from the backend
    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/solar-nfts");
                if (!response.ok) {
                    throw new Error("Failed to fetch contracts");
                }
                const data = await response.json();
                setContracts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContracts();
    }, []);

    if (loading) return <div>Loading contracts...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Deployed Contracts</h2>
            {contracts.length === 0 ? (
                <p>No contracts found</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Total Kilowatts</th>
                            <th>Burn Period (Years)</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Token Address</th>
                            <th>Transaction Hash</th>
                            <th>Created At</th>
                            <th>Logo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((contract) => (
                            <tr key={contract._id}>
                                <td>{contract.account}</td>
                                <td>{contract.totalKilowatts}</td>
                                <td>{contract.burnPeriodInYears}</td>
                                <td>{contract.name}</td>
                                <td>{contract.symbol}</td>
                                <td>{contract.tokenAddress}</td>
                                <td>{contract.transactionHash}</td>
                                <td>{contract.createdAt}</td>
                                <td>
                                    {contract.logo ? (
                                        <img src={contract.logo} alt="logo" width="50" height="50" />
                                    ) : (
                                        "No Logo"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DeployedContractsList;
