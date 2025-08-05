import styles from './customButton.module.scss'

interface ButtonProps{
    name:string;
    variant?:'gradient'|'black';
    onClick?:()=>void;

}

export default function customButton({name,variant='black'}:ButtonProps) {
  const variantClass = variant === 'gradient' ? styles.gradient : styles.black;
  return (
    <>
        <button className={ `${styles.button} ${variantClass}` }>
            {name}
        </button>
    </>
  )
}
