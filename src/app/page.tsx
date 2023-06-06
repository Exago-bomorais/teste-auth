'use client'

import { useState } from 'react';
import styles from './page.module.css'
import { useSession } from "next-auth/react";
import Spinner from '@/components/Spinner/page';


export default function Home() {
  const {data: session, status} = useSession()

  console.log(status)

  return (
    <main className={styles.main}>
      {status == 'loading' ? (<Spinner />) : null}
      {status == 'authenticated' ? (
        <h1>Testando</h1>
      ) : null}
    </main>
  )
}
