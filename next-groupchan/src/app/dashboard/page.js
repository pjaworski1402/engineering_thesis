"use client";

// import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GroupSearch from "@/components/Groups/GroupSearch";

const Dashboard = () => {
  const router = useRouter();
  const { status } = useSession();
  const [isLogged, setIsLogged] = useState(false);
  console.log(router)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      setIsLogged(true);
    }
  }, [status]);
  if (isLogged) {
    return (
      <div>
        {/* <button onClick={signOut}>Sign out</button> */}
        <GroupSearch></GroupSearch>
      </div>
    );
  } else {
    return <>loading</>;
  }
};

export default Dashboard;
