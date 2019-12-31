import React from 'react'
import Link from 'next/link';

const ButtonAction = (props) => {
  return (
    <>
      <Link href={props.url}>
        <button className={props.class}>
          {props.title} &nbsp; <i className={props.icon}></i>
        </button>
      </Link>
    </>
  )
}

export default ButtonAction