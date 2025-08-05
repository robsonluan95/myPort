import React from 'react'

interface ButtonProps{
    name:string;
    variant?:'gradient'|'black';
    onClick?:()=>void;

}

export default function customButton({name,variant='black'}:ButtonProps) {
  const variantClass = variant === 'gradiant'? style.black:
  return (
    
    < >
        <button className={${}}>
            {name}
        </button>
    </>
  )
}
