import React from 'react'

interface ButtonProps{
    name:string;
    variant

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
