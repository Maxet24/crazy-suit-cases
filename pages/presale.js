import Head from 'next/head'
// import Web3 from "web3";
// import { useState, useEffect } from 'react';

// import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

//   // FOR WALLET
//   const [signedIn, setSignedIn] = useState(false)

//   const [walletAddress, setWalletAddress] = useState(null)

//   // FOR MINTING
//   const [how_many_suitcase, set_how_many_suitcase] = useState(1)

//   const [suitcaseContract, setsuitcaseContract] = useState(null)

//   // INFO FROM SMART Contract

//   const [totalSupply, setTotalSupply] = useState(0)

//   const [saleStarted, setSaleStarted] = useState(false)

//   const [suitcasePrice, setSuitcasePrice] = useState(0)

//   useEffect( async() => { 

//     signIn()

//   }, [])

//   async function signIn() {
//     if (typeof window.web3 !== 'undefined') {
//       // Use existing gateway
//       window.web3 = new Web3(window.ethereum);
     
//     } else {
//       alert("No Ethereum interface injected into browser. Read-only access");
//     }

//     window.ethereum.enable()
//       .then(function (accounts) {
//         window.web3.eth.net.getNetworkType()
//         // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet) (main)
//         .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
//         let wallet = accounts[0]
//         setWalletAddress(wallet)
//         setSignedIn(true)
//         callContractData(wallet)

//   })
//   .catch(function (error) {
//   // Handle error. Likely the user rejected the login
//   console.error(error)
//   })
//   }

// //

//   async function signOut() {
//     setSignedIn(false)
//   }
  
//   async function callContractData(wallet) {
//     // let balance = await web3.eth.getBalance(wallet);
//     // setWalletBalance(balance)
//     const suitcaseContract = new window.web3.eth.Contract(ABI, ADDRESS)
//     setsuitcaseContract(suitcaseContract)

//     const salebool = await suitcaseContract.methods.saleIsActive().call() 
//     // console.log("saleisActive" , salebool)
//     setSaleStarted(salebool)

//     const totalSupply = await suitcaseContract.methods.totalSupply().call() 
//     setTotalSupply(totalSupply)

//     const suitcasePrice = await suitcaseContract.methods.suitcasePrice().call() 
//     setSuitcasePrice(suitcasePrice)
   
//   }
  
//   async function mintSuitcase(how_many_suitcase) {
//     if (suitcaseContract) {
 
//       const price = Number(suitcasePrice)  * how_many_suitcase 

//       const gasAmount = await suitcaseContract.methods.mintCrazySuitcase(how_many_suitcase).estimateGas({from: walletAddress, value: price})
//       console.log("estimated gas",gasAmount)

//       console.log({from: walletAddress, value: price})

//       suitcaseContract.methods
//             .mintCrazySuitcase(how_many_suitcase)
//             .send({from: walletAddress, value: price, gas: String(gasAmount)})
//             .on('transactionHash', function(hash){
//               console.log("transactionHash", hash)
//             })
          
//     } else {
//         console.log("Wallet not connected")
//     }
    
//   };

  



  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mint SuitCase</title>
        <link rel="icon" href="/images/logo.png" />

        <meta property="og:title" content="Crazy Suit Cases" key="ogtitle" />
        <meta property="og:description" content="Ouch! What is it? It's a runaway CazySuitcase! He needs a new home." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://crazysuitcases.club/" key="ogurl"/>
        <meta property="og:image" content="https://crazysuitcases.club/images/suit.jpg" key="ogimage"/>
        <meta property="og:site_name" content="https://crazysuitcases.club/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringsuitcase.co" key="twdomain" />
        <meta property="twitter:url" content="https://crazysuitcases.club/" key="twurl" />
        <meta name="twitter:title" content="Crazy Suit Cases" key="twtitle" />
        <meta name="twitter:description" content="Ouch! What is it? It's a runaway CazySuitcase! He needs a new home." key="twdesc" />
        <meta name="twitter:image" content="https://crazysuitcases.club/images/suit.jpg" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-around w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around GardeneStone">
              <a href="/" className="text-4xl text-white hover:text-black m-6">HOME</a>
              <a href="https://twitter.com/crazy_suitcases" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/x9Futw6MsH" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          {/* Comment it and uncomment it */}
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            <button className="windows iphonex text-xs GardeneStone inline-block border-2 border-blau bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
          </div>
          {/* <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="windows iphonex text-xs GardeneStone inline-block border-2 border-blau bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="windows iphonex text-xs GardeneStone inline-block border-2 border-blau bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div> */}
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex GardeneStone text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL suitcases MINTED:</span> <br/> <span className="flex GardeneStone items-center bg-grey-lighter rounded rounded-r-none my-4 text-blau text-6xl"> 0 / 10000</span>
                <span className="flex GardeneStone text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">You can buy a maximum of 2 suitcases at a time on presale.</span>
                <div id="mint" className="flex-col text-center  mt-8 mx-6 pb-10">
                  <span className="flex mosaic text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3">I wonna</span>
                  <br/>
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      name="" 
                                      className="GardeneStone pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest"
                                  />
                  <br/>
                  <span className="flex mosaic text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3">SuitCases!</span> <br/> 
    
                </div>
                <button className="rounded-xl border-2 border-white mt-4 Poppitandfinchsans text-3xl border-6 bg-gray-200  text-black hover:text-black p-2">PRESALE IS NOT ACTIVE</button>        

                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }