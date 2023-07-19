"use client"

import { signOut } from 'next-auth/react';

const Dashboard = () => {
    return ( 
        <div>
          <button onClick={signOut}>Sign out</button>
      </div>
     );
}
 
export default Dashboard;