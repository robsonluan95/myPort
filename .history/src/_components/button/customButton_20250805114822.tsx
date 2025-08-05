import React from 'react'

interface ButtonProps{
    name:string;
    variant?:'gradient'|'black';
    onClick?:()=>void;

}

export default function customButton({name}:ButtonProps) {
  const variantClass 
  return (
    
    < >
        <button className={${}}>
            {name}
        </button>
    </>
  )
}
