import React from 'react'

interface ButtonProps{
    name:string;

}

export default function custonButton({name}:ButtonProps) {
  return (
    <div>
        <button>
            {name}
        </button>
    </div>
  )
}
