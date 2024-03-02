import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">{children}</div>
    </>
  );
}
