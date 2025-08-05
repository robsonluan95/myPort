import React from 'react'

interface ButtonProps{
    name:string;
    

}

export default function customButton({name}:ButtonProps) {
  return (
    < >
        <button>
            {name}
        </button>
    </>
  )
}
