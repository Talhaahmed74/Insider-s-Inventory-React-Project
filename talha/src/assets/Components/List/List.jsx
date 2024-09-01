import React from 'react'
import './List.css'

const links = [
  {
    id: 1,
    name: 'Home',
    to: '/',
    classname: 'homeBtn',
  },
  {
    id: 2,
    name: 'Buyers',
    to: '/'
  },
  {
    id: 3,
    name: 'Sellers',
    to: '/'
  },
  {
    id: 4,
    name: 'Buy & Hold',
    to: '/'
  },
  {
    id: 5,
    name: 'Retail',
    to: '/'
  },
  {
    id: 6,
    name: 'Flip Opportunities',
    to: '/'
  },
  {
    id: 7,
    name: 'Off Market Inventory',
    to: '/'
  }
]

const List = () => {
  return (
    <ul className='list-Content'>
      {links.map((item) =>
        <li key={item?.id} style={item.id === 1 ? { color: '#4DAD49' } : {}}>
          {item?.name}
        </li>
      )}
    </ul>
  )
}

export default List
  