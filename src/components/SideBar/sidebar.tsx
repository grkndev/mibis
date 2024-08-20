"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icon from "@/lib/Icon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import paths from "./paths";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function SideBar() {
  const useNavigation = usePathname();

  return (
    <nav className="bg-[#E9E9E9]/50 border-r border-black/25 w-[20%] h-screen p-4 flex flex-col justify-between items-center">
      <div className="w-full space-y-3 justify-center items-center ">
        <Image
          src="/assests/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="w-[70%]"
        />
        <div className="w-full h-1 bg-[#CEF9EE]" />
        <div className="w-full space-y-1">
          <span className="text-[#B9B9B9]">Genel</span>
          <div className="flex flex-col w-full space-y-2">
            {paths.map((path) => (
              <Button
                asChild
                className={
                  cn("text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200 font-bold",
                  useNavigation === path.path ? "shadow-xl" : ""
                  )
                }
                variant={"ghost"}
              >
                <Link href={path.path}>
                  <Icon name={path.icon} color="#164B45" /> {path.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-3 ">
        <Button
          className="text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200 font-bold"
          variant={"ghost"}
        >
          <Icon name="Settings" color="#164B45" /> Ayarlarım
        </Button>
        <Button
          className="text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200 font-bold"
          variant={"ghost"}
        >
          <Icon name="LogOut" color="#164B45" /> Çıkış Yap
        </Button>
        <div className="w-full h-1 bg-[#CEF9EE]" />
        <Card>
          <CardContent className="p-2  flex items-center justify-start space-x-2 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold">Gürkan ÇİLOĞLU</span>
              <span className="text-black/50 text-sm">
                Hatay OBM İşletmeler Saymanı
              </span>
            </div>
          </CardContent>
        </Card>
        <span className="text-center text-black/25 p-1">©️ 2024. GRKN.DEV</span>
      </div>
    </nav>
  );
}
