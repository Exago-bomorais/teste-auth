'use client'


import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from 'next/navigation';
import {useRouter} from 'next/navigation'

export default function PageAuth() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {data: session} = useSession()

  const [userName, setUserName] = useState<string>('')
  const [pass, setPass] = useState<string>('')


  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: 'YXBpLnVuaWV2ZW50b3M=',
      password: 'NjA1NU5INjgxNA==',
      redirect: false,
      callbackUrl: "/",
    });

    if(result?.error == 'CredentialsSignin'){
      alert('Senha ou usuario invalidos')
    }
  };

  const logOff = async () => {
    const off = await signOut()
  }
  return (
    <main>
      <h1>Teste</h1>
      <input type='text' onChange={(e) => { 
        setUserName(e.currentTarget.value)
      }}/>
      <input type='text' onChange={(e) => { 
        setPass(e.currentTarget.value)
      }}/>
      <button onClick={onSubmit}>Login</button>
      <button onClick={logOff}>Log Off</button>
      <button onClick={() => {router.push('/teste')}} >Redirect</button>
    </main>
  )
}