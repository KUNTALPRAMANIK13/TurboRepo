"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [userData, setUserData] = useState<{
    email?: string;
    password?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/getUser");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{userData?.email || "No email found"}</p>
          <p>{userData?.password || "No password found"}</p>
        </>
      )}
    </div>
  );
}
