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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
export default function SideBar() {
  return (
    <div className="flex flex-col">
      <div className="md:hidden py-6 px-6 flex flex-row items-center justify-between border-b">
        <div className="flex felx-row items-center justify-center space-x-1">
          <span className="font-bold text-lg">MİBİS</span>
          <span className="text-sm">BİLGİ İŞLEM SİSTEMİ</span>
        </div>
        <MobileSideBar />
      </div>
      <div className="hidden  md:flex bg-[#F1F1F1]   flex-col items-center justify-between h-screen px-6 py-4">
        <div className="w-full flex flex-col space-y-2">
          <Image
            src="/assests/logo.png"
            alt="logo"
            width={250}
            height={250}
            className="px-4"
          />
          <div className="w-full h-[1px] bg-primary/10" />
          <span className="text-primary font-semibold">Genel</span>
          <div className="flex flex-col w-full space-y-2">
            <SideBarItems />
          </div>
        </div>
        <SideBarFooter />
      </div>
    </div>
  );
}
function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="flex">
        <Icon name="AlignJustify" size={24} />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader className="flex flex-col space-y-2  h-full ">
          <SheetTitle>Menü</SheetTitle>
          <SheetDescription className="flex flex-col space-y-2">
            <SideBarItems key={"mobile"} />
          </SheetDescription>
          <SheetFooter className="flex flex-col justify-end h-full">
            <SideBarFooter />
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
function SideBarItems() {
  const useNavigation = usePathname();
  return paths.map((path, i) => (
    <Button
      key={`${path.name}-${i}`}
      asChild
      className={cn(
        "text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200",
        useNavigation === path.path
          ? "bg-primary text-white hover:text-white hover:bg-primary/90"
          : ""
      )}
      variant={"ghost"}
    >
      <Link href={path.path}>
        <Icon
          name={path.icon}
          size={16}
          color={useNavigation === path.path ? "#fff" : "#164B45"}
        />
        <p className="text-sm font-semibold">{path.name}</p>
      </Link>
    </Button>
  ));
}
function SideBarFooter() {
  return (
    <div className="w-full flex flex-col space-y-3 ">
      <Button
        className="text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200 font-bold"
        variant={"ghost"}
      >
        <Icon name="Settings" size={16} color="#164B45" /> Ayarlarım
      </Button>
      <Button
        className="text-[#164B45] justify-start items-center gap-x-2 hover:bg-zinc-200 font-bold"
        variant={"ghost"}
      >
        <Icon name="LogOut" size={16} color="#164B45" /> Çıkış Yap
      </Button>
      <div className="w-full h-1 bg-[#CEF9EE]" />
      <Card className="bg-transparent border-none">
        <CardContent className=" p-2  flex items-center justify-start space-x-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold">Gürkan ÇİLOĞLU</span>
            <span className="text-black/50 text-[10px]">
              Hatay OBM İşletmeler Saymanı
            </span>
          </div>
        </CardContent>
      </Card>
      <span className="text-center text-black/25 p-1">©️ 2024. GRKN.DEV</span>
    </div>
  );
}
