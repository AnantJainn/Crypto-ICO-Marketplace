import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";

const TokenHistory = (shortenAddress, setOpenTokenHistory) => {

  
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const copyAddress = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied Successfully");
  }

  const [history, setHistory] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("TOKEN_HISTORY");

    if(storedData) {
      setHistory(JSON.parse(storedData));
      console.log(JSON.parse(storedData));
    }
  }, [])
  

  return <div>TokenHistory</div>;
};

export default TokenHistory;
