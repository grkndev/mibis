import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import moment from "moment";
import "moment/locale/tr";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "@/lib/Icon";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
export default function Calendar() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        {moment(Date.now()).format("MMMM YYYY")}
      </h2>
      <div className="grid grid-cols-7 text-center text-sm font-medium text-muted-foreground">
        <div className="hidden sm:block">PAZARTESİ</div>
        <div className="hidden sm:block">SALI</div>
        <div className="hidden sm:block">ÇARŞAMBA</div>
        <div className="hidden sm:block">PERŞEMBE</div>
        <div className="hidden sm:block">CUMA</div>
        <div className="hidden sm:block">CUMARTESİ</div>
        <div className="hidden sm:block">PAZAR</div>
        <div className="sm:hidden">Pzt</div>
        <div className="sm:hidden">Sal</div>
        <div className="sm:hidden">Çar</div>
        <div className="sm:hidden">Per</div>
        <div className="sm:hidden">Cum</div>
        <div className="sm:hidden">Cts</div>
        <div className="sm:hidden">Paz</div>
      </div>
      <div className="grid grid-cols-7 mt-2 text-center text-sm h-auto md:h-[600px] overflow-y-auto">
        {Array.from({ length: moment(Date.now()).daysInMonth() }).map(
          (_, i) => (
            <Sheet>
              <SheetTrigger
                className={cn(
                  "border p-4 hover:bg-muted flex flex-row md:flex-col justify-between items-center md:items-start ",
                  new Date(Date.now()).getDate() === i + 1
                    ? "bg-red-300 border-none hover:bg-red-300"
                    : ""
                )}
              >
                <div className="font-bold text-lg">{i + 1}</div>
                <div className=" flex-col space-y-1">
                  <Badge
                    variant="outline"
                    className="bg-red-200 text-red-500 rounded-lg hidden lg:flex"
                  >
                    Denetim Günü
                  </Badge>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    {moment(
                      new Date(
                        moment(Date.now()).year(),
                        moment(Date.now()).month(),
                        i + 1
                      )
                    ).format("DD MMMM YYYY")}
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-2 justify-between items-start">
                      <span className="text-black font-bold">
                        Yapılacaklar listesi ve notlar
                      </span>
                      <div className="flex items-center justify-center space-x-2 w-full">
                        <Input className="text-black font-semibold w-full" />
                        <Button variant="default">Ekle</Button>
                      </div>
                      <ScrollArea className="rounded-md w-full border p-2 h-[60vh]">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <Card className="space-x-2 flex flex-row items-center justify-between space-y-1 p-2 my-2">
                            <span className="font-medium">
                              Lorem ipsum dolor sit amet
                            </span>
                            <Button variant="ghost" className="h-2 p-1">
                              <Icon name="X" size={16} color="#164B45" />
                            </Button>
                          </Card>
                        ))}
                      </ScrollArea>
                    </div>
                  </SheetDescription>
                  <DialogFooter className="sm:justify-start w-full">
                    <DialogClose asChild>
                      <Button type="submit" className="w-full mt-2">
                        Kaydet
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          )
        )}
      </div>
    </div>
  );
}
