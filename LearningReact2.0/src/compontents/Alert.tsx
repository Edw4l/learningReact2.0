import { ReactNode } from "react";

interface Props {
  Children: ReactNode;
}


import React from 'react'

const Alert = ({ children }: Props) => {
  return (
    <div class="alert alert-primary" role="alert">
  {children}
</div>
  )
}

export default Alert