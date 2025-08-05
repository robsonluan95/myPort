import React from 'react'

interface ButtonProps{
    name:string;
    variant?:'gradient'|'black';
    onClick?:()=>void;

}

export default function customButton({name}:ButtonProps) {
  return (
    const 
    < >
        <button className={${}}>
            {name}
        </button>
    </>
  )
}
