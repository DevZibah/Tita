import React, { useEffect, useState } from 'react'
import '../style/Dashboard.css'
import safelock from '../assets/safelock.png'
import Modal from '../components/Modal'
import Web3 from 'web3';
import Wagmi from 'wagmi';

import { useContractRead } from "wagmi";
import {ABI} from '../../abi';
import { AbiItem } from 'web3-utils'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [setData]= useState('')
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  const contract = new web3.eth.Contract(ABI as AbiItem[], '0xB4f21c2996dc9f17801eE40BC4FFa41aF31D8A3E');
  
  const [contractValue, setContractValue] = useState('');
  useEffect(() => {
    const loadContractValue = async () => {
      try {
        const value = await contract.methods.proposalCount().call();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        let account = accounts[0]
        // Get Total Deposits by customer
        let getSupplyBalance = await contract.methods.getDepositsByAddress(account).call();

        console.log(getSupplyBalance)
        setContractValue(value);
      } catch (error) {
        console.error('Error retrieving value from contract:', error);
      }
    };

    loadContractValue();
  }, []);
  return (
    <section className='p-4 mt-2 sec-market'>
      <header>
        <h4 className='con-wal' onClick={() => setOpen(true)}>
          Dashboard
        </h4>
        <Modal open={open} onClose={() => setOpen(false)} />
      </header>
      <main className='mt-4 p-3 bloc-arti'>
        <h5 className='mar-texxt'>My Accounts</h5>
        <section className='mt-3'>
          <article className='d-flex'>
            <p className='mar-pp'>Net APY:</p>
            <p className='fs-5 mart-pp ms-2 dash-numb'>0.00% {contractValue}</p>
          </article>
          <section>
            <article className='d-flex'>
              <p className='mar-pp'>Daily Earnings:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Supply Balance:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Borrow Balance:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
          </section>
          <hr className='hor-mar' />
          <section className='dash-sec d-md-flex'>
            <article className='d-flex'>
              <p className='mar-pp'>Borrow Limit Used:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
            <article className='d-flex'>
              <p className='mar-pp'>Limit:</p>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00%</p>
            </article>
          </section>
          <article className='d-flex justify-content-end'>
            <div className='d-flex'>
              <img src={safelock} alt='safelock' className='lock' />
              <p className='mar-pp ms-2'>Your Safe Limit</p>
            </div>
            <div>
              <p className='fs-5 mart-pp ms-2 dash-numb'>0.00</p>
            </div>
          </article>
        </section>
      </main>
    </section>
  )
}

export default Dashboard
