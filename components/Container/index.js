import Button from "@/components/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import NFT_ABI from "../../abi/nftContractABI.json";
import { rpcURL, nftContractAddress } from "../../const/index";

const Container = () => {
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState({});
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState();
  const [balance, setBalance] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const checkNFTBalance = async (account) => {
    if (contract !== undefined) {
      const nftBalance = await contract.balanceOf(account);
      setBalance(parseInt(nftBalance, 16));
    }
  };

  const loadAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const account = accounts[0];

    setAccount(account);

    checkNFTBalance(account);
  };

  const loadNFTContract = async (provider) => {
    const nftContract = new ethers.Contract(
      nftContractAddress,
      NFT_ABI,
      provider
    );

    setContract(nftContract);
  };

  const loadConnection = async () => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);

      const ankrProvider = new ethers.providers.JsonRpcProvider(rpcURL);

      await loadNFTContract(ankrProvider);

      window.ethereum.on("accountsChanged", () => {
        loadAccount();
      });
    }
  };

  useEffect(() => {
    loadConnection();
  }, [account]);

  const props = {
    account,
    loadAccount,
    balance,
    setOpen,
  };

  return (
    <div className="container">
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Check In Details</DialogTitle>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {balance > 0 ? (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {`You have ticket, enjoy the event ;)`}
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                You Don't Have Ticket
              </Typography>
            )}
          </CardContent>
        </Card>
      </Dialog>
      <Button props={props} />
    </div>
  );
};

export default Container;
