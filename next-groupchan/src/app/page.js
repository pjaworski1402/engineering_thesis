"use client"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
export default function Home() {
  const router = useRouter();
  const { data } = useSession()
  if(data?.jwt){
    setTimeout(()=>router.push('/dashboard'),1000)
  }else{
    setTimeout(()=>router.push('/auth/login'),1000)
  }
  return (
    <main>
    </main>
  )
}
