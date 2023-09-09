"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data } = useSession();
  // Funkcja do obsługi przekierowań
  const redirectTo = (path) => {
    router.push(path);
  };
  useEffect(() => {
    // Sprawdź, czy użytkownik jest zalogowany
    if (data?.jwt) {
      redirectTo("/dashboard");
    } else {
      redirectTo("/auth/login");
    }
  }, []);

  return <main>{/* Treść strony głównej */}</main>;
}
