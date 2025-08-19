import styles from './customButton.module.scss'

interface ButtonProps {
  name: string;
  variant?: 'gradient' | 'black';
  onClick?: () => void;

}

export default function customButton({ name, variant }: ButtonProps) {
  const variantClass = variant === 'black' ? styles.black : styles.gradiant;
  return (
    < >
      <button className={`${styles.button} ${variantClass}`}>
        {name}
      </button>
    </>
  )
}
