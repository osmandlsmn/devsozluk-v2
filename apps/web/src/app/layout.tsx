import Header from "@/components/Layout/Header";
import "@/style.css";
import { Fragment } from "react";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Head />
      <div className="h-screen bg-background text-secondary font-poppins">
        <main className="flex h-[calc(100%-10px)] justify-between space-x-20 overflow-auto py-5">
          <div className="h-full w-full px-20">{children}</div>
        </main>
      </div>
    </Fragment>
  );
}
