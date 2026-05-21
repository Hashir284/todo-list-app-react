import React from 'react'

const Tr = ({task}) => {
  return (
    <tr>
        <td className='td1'>{task}</td>
        <td className='td2'><button>Delete</button></td>
    </tr>
  )
}

export default Tr
