import React, { useContext } from 'react'
import { FirstContext } from '../FirstContent'


export const Child3 = () => {
  const {userName} = useContext(FirstContext)
  const {address} = useContext(FirstContext)

  return (
    <section>
        <div>Child Three</div>
        <div>
          from Child Three 
          <br />
          {userName}
          {address}
        </div>
    </section>
  )
}
