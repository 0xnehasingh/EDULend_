import React, { useState, useEffect, useContext, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { FaFaucet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LendAndLoanContext } from "../context/LendAndLoanContext";
import { shortenAddress } from "../utils/shortenAddress";
import { ethers } from "ethers";

let commonCss =
  "font-bold px-2 md:px-4 py-1  cursor-pointer rounded-2xl hover:text-white transition duration-200 flex ";

const NavItem = ({ active, content, handleOnClick }) => {
  return content == "Contract" ? (
    <a
      className={commonCss + "text-gray-300"}
      href="https://edu-chain-testnet.blockscout.com/address/0xDF11fC9D4Cc9296758fDD422472d5E3430dbAF1E"
      target="_blank"
      rel="noopenner noreferrer"
    >
      {content} <FiTrendingUp className="ml-1 text-bold" />
    </a>
  ) : (
    <Link to={"/" + (content == "Borrow" ? "" : content)}>
      <div
        onClick={handleOnClick}
        className={
          commonCss +
          (active == content
            ? "bg-[#22437c] text-white hover:text-gray-400"
            : "text-gray-300")
        }
      >
        {content}
      </div>
    </Link>
  );
};

export default function Navbar() {
  const { requestAccount, account, provider, getTokenContract } =
    useContext(LendAndLoanContext);
  const [isActive, setIsActive] = useState("Borrow");
  const [isDropDown, setIsDropDown] = useState(false);
  const [isShowingToken, setIsShowingToken] = useState(false);
  const [userBalance, setUserBalance] = useState();
  const dropdownRef = useRef();
  const navMenu = ["Borrow", "Lend", "Position",  "RiskAssessment", "Contract"];

  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(async () => {
    const url = window.location.href;
    let param = url.substring(url.lastIndexOf("/") + 1);
    param == "" ? setIsActive("Borrow") : setIsActive(param);
    if (account) {
      let balance = await provider.getBalance(account);
      setUserBalance(
        Number(ethers.utils.formatEther(balance.toString())).toFixed(2)
      );
    }
    //balance = ethers.utils.formatEther(balance);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [account]);

  const changeBalance = async () => {
    let statusNow = !isShowingToken;
    setIsShowingToken(!isShowingToken);
    if (statusNow) {
      let tokenBalance = getTokenContract(provider);
      const tokenAmount = await tokenBalance.balanceOf(account);
      setUserBalance(tokenAmount.toString() / 10 ** 18);
    } else {
      let balance = await provider.getBalance(account);
      setUserBalance(
        Number(ethers.utils.formatEther(balance.toString())).toFixed(2)
      );
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 p-5">
      <div className="w-[fit-content] px-20 font-courgette font-extrabold text-[#3272e2] text-5xl cursor-pointer hover:scale-125 transition duration-200">
        EDULend
      </div>
      <div className="fixed bottom-5 left-[50%] translate-x-[-50%] md:static md:translate-x-[%] p-[3px] bg-[#3272e2] flex rounded-full md:w-[fit-content] place-self-center">
        {navMenu.map((item, index) => (
          <NavItem
            key={item + index}
            active={isActive}
            content={item}
            handleOnClick={() => setIsActive(item)}
          />
        ))}
      </div>
      <div className="flex justify-self-end  md:justify-self-end  items-center justify-center">
        <a
          href="https://explorer.glif.io/"
          className="min-w-[170px] hidden 2xl:flex items-center mr-2 px-4 py-2 rounded-2xl bg-[#3272e2] cursor-pointer"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <div className="w-[9px] h-[9px] bg-yellow-500 mr-2 rounded-full"></div>
          EDU Chain Testnet
        </a>
        {!account ? (
          <div
            onClick={() => requestAccount()}
            className="bg-[#3272e2] text-center w-[130px] text-sm md:text-base md:w-auto px-2 md:px-4 py-2 rounded-2xl cursor-pointer outline outline-[1px] outline-[#3272e2] text-white hover:text-white border-[1px] border-transparent hover:border-[#3d8be970] transition duration-200"
          >
            Connect Wallet
          </div>
        ) : (
          <div className="bg-[#3272e2] flex items-center rounded-2xl p-[1px]">
            <div
              title={userBalance + " " + (isShowingToken ? "wETH" : "EDU")}
              onClick={() => changeBalance()}
              className="hidden lg:flex rounded-tl-2xl rounded-bl-2xl py-2  cursor-pointer hover:border-gray-600 border-r-[0px] border-l-[1px] border-y-[1px] border-transparent transition duration-200"
            >
              <p className="px-3 select-none max-w-[120px] truncate">
                {userBalance}
              </p>
              <p className="mr-2">{isShowingToken ? "wETH" : "EDU"}</p>
            </div>
            <a
              target="_blank"
              rel="noopenner noreferrer"
              href={`https://explorer.glif.io/address/${account}`}
              className="px-4 py-2 bg-[#22437c] rounded-2xl  cursor-pointer hover:border-gray-600 border-[1px] border-transparent transition duration-200"
            >
              {shortenAddress(account)}
            </a>
          </div>
        )}
        <div
          className="relative"
          ref={dropdownRef}
          onClick={() => {
            isDropDown ? setIsDropDown(false) : setIsDropDown(true);
          }}
        >
          <div className="flex items-center h-10 px-3 bg-[#3272e2] rounded-xl cursor-pointer ml-2 border-[1px] border-transparent transition duration-200 hover:border-gray-600">
            <BsThreeDots className="text-2xl" />
          </div>
          {isDropDown ? (
            <div className="absolute right-0 top-[100%] mt-2 w-48 px-5 py-3 shadow rounded-md shadow-lg bg-[#3272e2] text-gray-300 font-semibold select-none">
              <a
                href=""
                target="_blank"
                rel="noopenner noreferrer"
                className="flex justify-between items-center py-1 hover:text-white"
              >
                <div className="">Faucet</div>
                <FaFaucet className="text-xl" />
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
