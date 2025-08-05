import React from 'react'

interface ButtonProps{
    name:string;

}

export default function customButton({name}:ButtonProps) {
  return (
    <div >
        <button>
            {name}
        </button>
    </div>
  )
}
