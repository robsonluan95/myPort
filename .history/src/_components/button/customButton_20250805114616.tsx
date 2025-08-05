import React from 'react'

interface ButtonProps{
    name:string;
    variant:'gradient'|

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
