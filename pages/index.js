import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { usesStateContext } from "../Context";

import Header from "../Components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Table from "../Components/Table";
import PreSaleList from "../Components/PreSaleList";
import UploadLogo from "../Components/UploadLogo";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import TokenCreator from "../Components/TokenCreator";
import TokenHistory from "../Components/TokenHistory";
import CreateICO from "../Components/CreateICO";
import Card from "../Components/Card";
import BuyToken from "../Components/BuyToken";
import WidthdrawToken from "../Components/WidthdrawToken";
import TokenTransfer from "../Components/TokenTransfer";
import ICOMarket from "../Components/ICOMarket";
import { ICO_MARKETPLACE_ADDRESS, shortenAddress } from "../Context/constants";



const index = () => {
  const { widthdrawToken, buyToken, transferToken, createICOSALE, GET_ALL_ICOSALE_TOKEN, GET_ALL_USER_ICOSALE_TOKEN, createERC20, connectWallet, openBuyToken, setOpenBuyToken, openWithdrawToken, setOpenWithdrawToken, openTransferToken, setOpenTransferToken, openTokenCreator, setOpenTokenCreator, openCreateICO, setOpenCreateICO, address, setAddress, accountBalance, loader, setLoader, currency, PINATA_API_KEY, PINATA_SECRET_KEY } = usesStateContext();

  const notifySuccess = (msg) => toast.success(msg, { duration: 200 });
  const notifyError = (msg) => toast.error(msg, { duration: 200 });

  const [openAllICO, setOpenAllICO] = useState(false);
  const [openTokenHistory, setOpenTokenHistory] = useState(false);
  const [openICOMarketplace, setOpenICOMarketplace] = useState(false);

  const [buyICO, setBuyICO] = useState();

  const copyAddress = () => {
    navigator.clipboard.writeText(ICO_MARKETPLACE_ADDRESS);
    notifySuccess("Copied successfully")
  }

  return <div>
    <Header accountBalance={accountBalance}
      setAddress={setAddress}
      address={address}
      connectWallet={connectWallet}
      ICO_MARKETPLACE_ADDRESS={ICO_MARKETPLACE_ADDRESS}
      shortenAddress={shortenAddress}
      setOpenAllICO={setOpenAllICO}
      openAllICO={openAllICO}
      setOpenTokenCreator={setOpenTokenCreator}
      openTokenCreator={openTokenCreator}
      setOpenTokenHistory={setOpenTokenHistory}
      openTokenHistory={openTokenHistory}
      setOpenICOMarketplace={setOpenICOMarketplace}
      openICOMarketplace={openICOMarketplace}
    />
    {
      openAllICO && (
        <ICOMarket />
      )
    }
    {openTokenCreator && <TokenCreator createERC20={createERC20} shortenAddress={shortenAddress} setOpenTokenCreator={setOpenTokenCreator} setLoader={setLoader} address={address} connectWallet={connectWallet} PINATA_API_KEY={PINATA_API_KEY} PINATA_SECRET_KEY={PINATA_SECRET_KEY} />}
    {openTokenHistory && <TokenHistory shortenAddress={shortenAddress} setOpenTokenHistory={setOpenTokenHistory} />}
    {!openCreateICO && <CreateICO shortenAddress={shortenAddress} setOpenCreateICO={setOpenCreateICO} connectWallet={connectWallet} address={address} createICOSALE={createICOSALE} />}
    {openICOMarketplace && <ICOMarket />}
    {openBuyToken && <BuyToken />}
    {openTransferToken && <TokenTransfer />}
    {openWithdrawToken && <WidthdrawToken />}
    <Footer />
    {loader && <Loader />}
    {/* <Loader /> */}
  </div>;
};

export default index;
