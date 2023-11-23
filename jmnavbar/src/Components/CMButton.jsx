import React from 'react'
import { Button } from "@material-tailwind/react";

const CMButton = () => {
  return (
    <>
     <div className="flex w-max gap-4">
       <Button className="bg-green-400 hover:bg-green-300" color="green">Login</Button>
     </div>
    </>
  )
}

export default CMButton
