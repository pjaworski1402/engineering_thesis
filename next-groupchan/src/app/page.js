"use client"
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  if(true){
    setTimeout(()=>router.push('/auth/login'),1000)
  }
  return (
    <main>
    </main>
  )
}
