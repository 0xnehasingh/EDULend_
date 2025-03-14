import { useContext, useState, useEffect } from "react";
import Borrow from "./components/Borrow";
import Lend from "./components/Lend";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Redemption from "./components/Redemption";
import Landing from "./components/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import { LendAndLoanContext } from "./context/LendAndLoanContext";
import RiskAssessment from "./components/RiskAssessment";

function App() {
  const { networkId, contractLiquidity, isSupportMetaMask } = useContext(LendAndLoanContext);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="App min-h-screen text-white">
      {isLandingPage ? (
        // Landing page route
        <div>
          <Navbar />
          <Landing />
        </div>
      ) : (
        // Dashboard routes
        isSupportMetaMask ? (
          networkId != undefined ? (
            networkId == 656476 ? (
              <div>
                <div>
                  <Navbar />
                </div>
                <Routes>
                  <Route path="/borrow" element={<Borrow />} />
                  <Route path="/lend" element={<Lend />} />
                  <Route path="/position" element={<Redemption />} />
                  <Route path="/riskassessment" element={<RiskAssessment />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
            ) : (
              <div className="translate-y-1/2">
                <div className="text-center flex items-center justify-center shadow-xl w-[90%] md:max-w-[450px] h-[200px] bg-[#0090ff] mx-auto rounded-xl p-4">
                  Sorry, our contract only run on EDUChain testnet, you have to
                  switch your network to continue...
                </div>
              </div>
            )
          ) : (
            <div className="translate-y-1/2">
              <div className="text-center flex items-center justify-center shadow-xl w-[90%] md:max-w-[450px] h-[200px] bg-[#0090ff] mx-auto rounded-xl p-4">
                Try to refresh the page ^_^
              </div>
            </div>
          )
        ) : (
          <div className="translate-y-1/2">
            <div className="text-center flex items-center justify-center shadow-xl w-[90%] md:max-w-[450px] h-[200px] bg-[#0090ff] mx-auto rounded-xl p-4">
              You should consider trying MetaMask!
            </div>
          </div>
        )
      )}
      
      <div className="bg-shine bg-main fixed top-0 left-0 right-0 bottom-0 z-[-1] pointer-events-none w-[200vw] w-[200vh]"></div>
      
      {!isLandingPage && (
        <div className="hidden md:flex justify-center items-center fixed right-3 bottom-3 text-gray-300">
          <div className="h-[10px] w-[10px] rounded-full mr-1 bg-green-500"></div>
          <div>
            Contract total liquidity:{" "}
            {contractLiquidity ? contractLiquidity + "EDU" : "Fetching.."}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;