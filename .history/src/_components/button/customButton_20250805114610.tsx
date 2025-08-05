import React from 'react'

interface ButtonProps{
    name:string;
    variant:'grad'

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
