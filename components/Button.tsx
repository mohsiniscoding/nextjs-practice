import styles from  './Button.module.css'
import type { AppProps } from 'next/app'

export function PrimaryButton(){
    return (
        <button type='button' className={styles.primary}>
            Button with text
        </button>
    )
}