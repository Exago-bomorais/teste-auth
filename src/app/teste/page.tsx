'use client'

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Spinner from "@/components/Spinner/page";

export default function Teste() {
    const router = useRouter()
  const [sessionReady, setSessionReady] = useState(false);
  const { data: session, status } = useSession({
    required: true
  });

  useEffect(() => {
    if (status == "loading") {
      <Spinner />
    }
  }, [status]);

  if (!sessionReady || !session) {
    return null; // Retorna nulo para não renderizar nada
  }

  return (
    <h1>TESTANDOOOOOOOO</h1>
  );
}