"use client"
import Link from "next/link"

import styles from "./error.module.scss"

export default function Error(){

    return(
        <div className={styles.error}>
            <h1>Ops.. Parece que a página que você tentou acessar não existe...</h1>
            <Link href="/">
                Voltar para página inicial            
            </Link>
        </div>
    )

}