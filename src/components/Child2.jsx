import React, { useContext } from 'react'
import { FirstContext } from '../FirstContent'


export const Child2 = () => {

  const {userName} = useContext(FirstContext)

  return (
    <section>
        <div>Child Two</div>
        <div> {userName} </div>
    </section>
  )
}
