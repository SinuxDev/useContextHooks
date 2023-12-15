import React, { useContext } from 'react'
import { FirstContext } from '../FirstContent'


export const Child2 = () => {

  const {num, setNum} = useContext(FirstContext)

  return (
    <section>
        <div>Child Two</div>
        <div> {num} </div>
        <button onClick={() => setNum((prev)=> prev + 1)} > +1 </button>
        <div>
          <button onClick={() => setNum((prev) => prev - 1)}  > -1</button>
        </div>
    </section>
  )
}
