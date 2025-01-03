// import React from "react";

// import UploadLogo from "../Components/UploadLogo";
// import Input from "./Input";
// import Button from "./Button";
// import { useState } from "react";

// const TokenCreator = ({
//   createERC20, shortenAddress, setOpenTokenCreator, setLoader, address, connectWallet, PINATA_API_KEY, PINATA_SECRET_KEY
// }) => {
//   const [imageURL, setImageURL] = useState();
//   const [token, setToken] = useState({
//     name: "",
//     Symbol: "",
//     supply: "",
//   })
//   return <div id={"myModal"} className={"modal"}>
//     <div className="modal-content">
//       <span onClick={() => setOpenTokenCreator(false)} className="close">
//         &times;
//       </span>
//       <h2 style={{ marginBottom: "1rem" }}>Create Token</h2>

//       <UploadLogo imageURL={imageURL} setImageURL={setImageURL} setLoader={setLoader} PINATA_API_KEY={PINATA_API_KEY} PINATA_SECRET_KEY={PINATA_SECRET_KEY} />

//       <div className="input-Container">
//         <Input placeholder={"Name"} handleChange={(e) => setToken({ ...token, name: e.target.value })} />
//         <Input placeholder={"Symbol"} handleChange={(e) => setToken({ ...token, symbol: e.target.value })} />
//         <Input placeholder={"Supply"} handleChange={(e) => setToken({ ...token, supply: e.target.value })} />
//       </div>
//       <div className="button-box" style={{ marginTop: "1rem" }}>
//         {address ? (
//           <Button name="Create Token" handleClick={() => createERC20(token, address, imageURL)} />
//         ) : (
//           <Button name="Connect Wallet" handleClick={() => connectWallet()} />
//         )}
//       </div>
//     </div>
//   </div>;
// };

// export default TokenCreator;



// import React, { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";

// const TokenCreator = ({
//   shortenAddress,
//   setOpenCreateSolarNFT,
//   connectWallet,
//   address,
//   createSolarNFT,
// }) => {
//   const [solarNFTData, setSolarNFTData] = useState({
//     name: "",
//     symbol: "",
//     totalKilowatts: "",
//     burnPeriodInYears: "",
//     kilowattsToMint: "",
//     imageURL: "",
//   });

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span onClick={() => setOpenCreateSolarNFT(false)} className="close">
//           &times;
//         </span>
//         <h2>Create SolarNFT</h2>
//         <div className="input-container" style={{ marginTop: "1rem" }}>
//           <Input
//             placeholder={"Name"}
//             handleChange={(e) =>
//               setSolarNFTData({ ...solarNFTData, name: e.target.value })
//             }
//           />
//           <Input
//             placeholder={"Symbol"}
//             handleChange={(e) =>
//               setSolarNFTData({ ...solarNFTData, symbol: e.target.value })
//             }
//           />
//           <Input
//             placeholder={"Total Kilowatts"}
//             handleChange={(e) =>
//               setSolarNFTData({
//                 ...solarNFTData,
//                 totalKilowatts: e.target.value,
//               })
//             }
//           />
//           <Input
//             placeholder={"Burn Period in Years"}
//             handleChange={(e) =>
//               setSolarNFTData({
//                 ...solarNFTData,
//                 burnPeriodInYears: e.target.value,
//               })
//             }
//           />
//           <Input
//             placeholder={"Kilowatts to Mint"}
//             handleChange={(e) =>
//               setSolarNFTData({
//                 ...solarNFTData,
//                 kilowattsToMint: e.target.value,
//               })
//             }
//           />
//           <Input
//             placeholder={"Image URL"}
//             handleChange={(e) =>
//               setSolarNFTData({ ...solarNFTData, imageURL: e.target.value })
//             }
//           />
//         </div>
//         <div className="button-box" style={{ marginTop: "1rem" }}>
//           {address ? (
//             <Button
//               name="Create SolarNFT"
//               handleClick={() => createSolarNFT(solarNFTData, address)}
//             />
//           ) : (
//             <Button name="Connect Wallet" handleClick={() => connectWallet()} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenCreator;




import React, { useState } from "react";
import UploadLogo from "../Components/UploadLogo";
import Input from "./Input";
import Button from "./Button";

const TokenCreator = ({
  createSolarNFT,
  shortenAddress,
  setOpenCreateSolarNFT,
  setLoader,
  address,
  connectWallet,
  PINATA_API_KEY,
  PINATA_SECRET_KEY,
}) => {
  const [imageURL, setImageURL] = useState("");
  const [solarNFTData, setSolarNFTData] = useState({
    name: "",
    symbol: "",
    totalKilowatts: "",
    burnPeriodInYears: "",
  });

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={() => setOpenCreateSolarNFT(false)} className="close">
          &times;
        </span>
        <h2 style={{ marginBottom: "1rem" }}>Create SolarNFT</h2>

        {/* Image Upload Component */}
        <UploadLogo
          imageURL={imageURL}
          setImageURL={setImageURL}
          setLoader={setLoader}
          PINATA_API_KEY={PINATA_API_KEY}
          PINATA_SECRET_KEY={PINATA_SECRET_KEY}
        />

        <div className="input-container" style={{ marginTop: "1rem" }}>
          <Input
            placeholder="Name"
            handleChange={(e) =>
              setSolarNFTData({ ...solarNFTData, name: e.target.value })
            }
          />
          <Input
            placeholder="Symbol"
            handleChange={(e) =>
              setSolarNFTData({ ...solarNFTData, symbol: e.target.value })
            }
          />
          <Input
            placeholder="Total Kilowatts"
            type="number"
            handleChange={(e) =>
              setSolarNFTData({
                ...solarNFTData,
                totalKilowatts: e.target.value,
              })
            }
          />
          <Input
            placeholder="Burn Period in Years"
            type="number"
            handleChange={(e) =>
              setSolarNFTData({
                ...solarNFTData,
                burnPeriodInYears: e.target.value,
              })
            }
          />
          {/* <Input
            placeholder="Kilowatts to Mint"
            type="number"
            handleChange={(e) =>
              setSolarNFTData({
                ...solarNFTData,
                kilowattsToMint: e.target.value,
              })
            }
          /> */}
        </div>

        <div className="button-box" style={{ marginTop: "1rem" }}>
          {address ? (
            <Button
              name="Create SolarNFT"
              handleClick={() => createSolarNFT({ ...solarNFTData, imageURL }, address)}
            />
          ) : (
            <Button name="Connect Wallet" handleClick={() => connectWallet()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenCreator;
