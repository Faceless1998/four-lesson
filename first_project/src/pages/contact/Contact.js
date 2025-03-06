import React from 'react'

const data = [
  {
    ID: 87325876,
    firstName: "hello world",
    lastName: "ragaca", //String
    age: 18,  //Number
    status: true, //Boolean
    profit: "100L",
  },
  {
    ID: 87325876,
    firstName: "hello",
    lastName: "ragaca", //String
    age: 18,  //Number
    status: true, //Boolean
  }
]


export const Contact = () => {
  return (
    <>
    {
      data.map( function(element, index) {
        return <div> {element.firstName} - {element.lastName} - {element.profit} </div>
      })
    }
    </>
  )
}
