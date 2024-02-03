import styles from './cta.module.css'
type Props = {
  disabled?: boolean
  onclick?: () => void
  btnName?: string
  type?: string
}

export const Button = ({ disabled, onclick, btnName }: Props) => {
  return (
    <button disabled={disabled} className={styles.btn} onClick={onclick}>
      {btnName}
    </button>
  )
}
