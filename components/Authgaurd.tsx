"use client";

import { useAuth } from "@/lib/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="text-[#563007] bg-white h-full text-center mt-20">Loading...</div>;
  }

  return <>{children}</>;
}
