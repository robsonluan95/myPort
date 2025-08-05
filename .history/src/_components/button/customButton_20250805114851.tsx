import React from 'react'

interface ButtonProps{
    name:string;
    variant?:'gradient'|'black';
    onClick?:()=>void;

}

export default function customButton({name,variant='black'}:ButtonProps) {
  const variantClass = variant?
  return (
    
    < >
        <button className={${}}>
            {name}
        </button>
    </>
  )
}
