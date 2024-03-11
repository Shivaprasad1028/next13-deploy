import React from 'react'
interface Props{
 amount:number
}

const ChangedPrice = ({amount}:Props) => {
  const ChangedAmount = new Number(amount).toLocaleString("en-IN",{
    style:"currency",
    currency:"INR",
    minimumFractionDigit:2,
  })
  return (
   <span> {ChangedAmount}</span>
  )
}

export default ChangedPrice

