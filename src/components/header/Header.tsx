"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAppContext } from "@/context/context";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export default function Header() {
  const { state, dispatch } = useAppContext();
  const { publicKey, connected , disconnect } = useWallet();
  const storedPublicKey = window.localStorage.getItem("Public_key");

  useEffect(() => {
    if (connected && publicKey) {
      dispatch({
        type: "ADD_USER",
        payload: {
          userData: {
            id: state.userAccount.length + 1,
            publicKey: publicKey.toBase58(),
          },
        },
      });
      localStorage.setItem("Public_key", JSON.stringify(publicKey.toBase58()));
    }
  }, [connected, publicKey]);

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-background border-b md:px-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
      >
        <span className="text-black text-xl">SolHunt</span>
      </Link>
      <div className="relative flex-1 max-w-md mx-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md bg-muted text-foreground"
        />
      </div>
      {storedPublicKey == null || storedPublicKey == "" ? (
        <div>
          <WalletMultiButton className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear text-sm" />
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <div className="w-2 h-2" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/product"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <div className="w-2 h-2" />
                <span>My products</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
                onClick={async () => {
                  await disconnect();
                  dispatch({
                    type: "REMOVE_USER",
                    payload: {
                      id: publicKey?.toBase58()
                    }
                  });
                  window.localStorage.removeItem("Public_key");
                }}
              >
                <div className="w-2 h-2" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
