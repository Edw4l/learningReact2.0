import React from 'react'

interface Props {
    children: string;
    color: string;
    onclick: () => void;
}

const Button = ({ children }: Props) => {
  return (
    <button className={'btn btn-' + color} onclick={onclick}>{children}</button>
  )
}

export default Button