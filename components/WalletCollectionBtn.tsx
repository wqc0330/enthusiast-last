"use client";

import { CHAIN_NAMESPACES, IAdapter, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import { useEffect, useState } from "react";

import RPC from "@/public/script/ethersRPC";

const clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ"; // get from https://dashboard.web3auth.io

const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x98a", // hex of 137, polygon mainnet
    rpcTarget: "https://rpc.cardona.zkevm-rpc.com",
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: "Polygon zkEVM Cardona Testnet",
    blockExplorerUrl: "https://cardona-zkevm.polygonscan.com",
    ticker: "ETH",
    tickerName: "Polygon Ecosystem Token",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
});

const web3AuthOptions: Web3AuthOptions = {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
    privateKeyProvider,
}
const web3auth = new Web3Auth(web3AuthOptions);

export default function WalletCollectionBtn() {
    const [provider, setProvider] = useState<IProvider | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                const adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });
                adapters.forEach((adapter: IAdapter<unknown>) => {
                    web3auth.configureAdapter(adapter);
                });
                await web3auth.initModal();
                setProvider(web3auth.provider);

                if (web3auth.connected) {
                    setLoggedIn(true);
                }
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const login = async () => {
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
        if (web3auth.connected) {
            setLoggedIn(true);
        }
    };

    const logout = async () => {
        await web3auth.logout();
        setProvider(null);
        setLoggedIn(false);
    };

    const unloggedInView = (
        <>
            <button className="w-full h-full rounded-lg bg-black/20" onClick={login}>登录</button>
        </>
    )

    const loggedInView = (
        <>
            <button onClick={logout}>logout</button>
        </>
    )

    return (
        <div className="flex justify-center h-10 w-20">{loggedIn ? loggedInView : unloggedInView}</div>
    )
}