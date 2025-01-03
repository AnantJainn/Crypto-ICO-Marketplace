// import React from "react";
// import UploadLogo from "../Components/UploadLogo";
// import Input from "./Input";
// import Button from "./Button";
// import toast from "react-hot-toast";

// const Marketplace = ({ array, shortenAddress, setBuyICO, setOpenBuyToken, currency }) => {

//   const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
//   const notifyError = (msg) => toast.error(msg, { duration: 2000 });

//   const copyAddress = (text) => {
//     navigator.clipboard.writeText(text);
//     notifySuccess("Copied Successfully");
//   }
//   return (
//     <div className="table-container">
//       <table className="custom-table">
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Symbol</td>
//             <td>Supply</td>
//             <td>Token</td>
//             <td>Creator</td>
//             <td>Price</td>
//             <td>Buy</td>
//           </tr>
//         </thead>
//         <tbody>
//           {array?.map((token, index) => (
//             <tr key={index + 1}>

//               <td>{token?.name}</td>
//               <td>{token?.symbol}</td>
//               <td>{token?.icoSaleBal}</td>
//               <td onClick={() => copyAddress(token?.token)}>{shortenAddress(token?.token)}</td>
//               <td onClick={() => copyAddress(token?.creator)}>{shortenAddress(token?.creator)}</td>
//               <td>{token?.price} {currency}</td>
//               <td onClick={() => (setBuyICO(token), setOpenBuyToken(true))}><Button name={"Buy"} /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Marketplace;





// import React, { useEffect, useState } from "react";
// import UploadLogo from "../Components/UploadLogo";
// import Input from "./Input";
// import Button from "./Button";
// import toast from "react-hot-toast";
// // import "./Marketplace.css";

// const Marketplace = ({ array, shortenAddress, setBuyICO, setOpenBuyToken, currency, startBurnPeriod }) => {

//   const [contracts, setContracts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch contracts from the backend
//     useEffect(() => {
//         const fetchContracts = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/solar-nfts");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch contracts");
//                 }
//                 const data = await response.json();
//                 setContracts(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchContracts();
//     }, []);

//     if (loading) return <div>Loading contracts...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
//             <h2>Deployed Contracts</h2>
//             {contracts.length === 0 ? (
//                 <p>No contracts found</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Account</th>
//                             <th>Total Kilowatts</th>
//                             <th>Burn Period (Years)</th>
//                             <th>Name</th>
//                             <th>Symbol</th>
//                             <th>Token Address</th>
//                             <th>Transaction Hash</th>
//                             <th>Created At</th>
//                             <th>Logo</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contracts.map((contract) => (
//                             <tr key={contract._id}>
//                                 <td>{contract.account}</td>
//                                 <td>{contract.totalKilowatts}</td>
//                                 <td>{contract.burnPeriodInYears}</td>
//                                 <td>{contract.name}</td>
//                                 <td>{contract.symbol}</td>
//                                 <td>{shortenAddress(contract.tokenAddress)}</td>
//                                 <td>{shortenAddress(contract.transactionHash)}</td>
//                                 <td>{contract.createdAt}</td>
//                                 <td>
//                                     {contract.logo ? (
//                                         <img src="https://amethyst-excellent-booby-306.mypinata.cloud/ipfs/QmW8Hr1WuSNf68jutkepsmyA2q9sYNMdRREpmsN6MLpGhC" alt="logo" width="50" height="50" />
//                                     ) : (
//                                       <img src="https://amethyst-excellent-booby-306.mypinata.cloud/ipfs/QmW8Hr1WuSNf68jutkepsmyA2q9sYNMdRREpmsN6MLpGhC" alt="logo" width="50" height="50" />

//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };
// export default Marketplace;






import React, { useEffect, useState } from "react";
import UploadLogo from "../Components/UploadLogo";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";

const Marketplace = ({
    array,
    shortenAddress,
    setBuyICO,
    setOpenBuyToken,
    currency,
    startBurnPeriod
}) => {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [burnStarted, setBurnStarted] = useState({}); // Track burn period status for each contract

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
                            <th>Start Burn Period</th>
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
                                <td>{shortenAddress(contract.tokenAddress)}</td>
                                <td>{shortenAddress(contract.transactionHash)}</td>
                                <td>{contract.createdAt}</td>
                                <td>
                                    {contract.logo ? (
                                        <img
                                            src={contract.logo}
                                            alt="logo"
                                            width="50"
                                            height="50"
                                        />
                                    ) : (
                                        "No Logo"
                                    )}
                                </td>
                                <td>
                                    <Button
                                        name={
                                            burnStarted[contract.tokenAddress]
                                                ? "Started"
                                                : "Start Burn"
                                        }
                                        handleClick={() => {
                                            startBurnPeriod(contract.tokenAddress);

                                        }}
                                        
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Marketplace;
