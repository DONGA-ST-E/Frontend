import React, { useState } from 'react'
import Connector from './Connector'

const ConnectManager = ({setOpen,memoCount,appear,setAppear}) => {

  const arr = ['Connector1.png','Connector2.png','Connector3.png', 'Connector4.svg']

   const openChat = ()=>{
      setAppear(false)
      setOpen(true)

   }
   


  return (
    <div className='connectManager'>
    {arr.map((item,idx)=>{
                return (
                <div className='item'>
                  <img src={item}/>
                </div>
                )
            })}
        <div className='messanger'>
            <img onClick={openChat} src='Chat.svg'/>
            {appear?<div className="alarm">{memoCount}</div>:<></>}
        </div>
    </div>
  )
}

export default ConnectManager