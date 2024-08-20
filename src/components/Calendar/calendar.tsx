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
      <div className="grid grid-cols-7 mt-2 text-center text-sm h-[600px] overflow-y-auto">
        {Array.from({ length: moment(Date.now()).daysInMonth() }).map(
          (_, i) => (
            <Dialog>
              <DialogTrigger
                className={cn(
                  "border p-4 hover:bg-muted flex flex-col justify-between ",
                  new Date(Date.now()).getDate() === i + 1 ? "bg-zinc-300" : ""
                )}
              >
                <div className="font-bold text-lg">{i + 1}</div>
                <div className="flex flex-col space-y-1">
                  <Badge variant="destructive" className="hidden lg:flex">
                    Denetim Günü
                  </Badge>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {moment(
                      new Date(
                        moment(Date.now()).year(),
                        moment(Date.now()).month(),
                        i + 1
                      )
                    ).format("DD MMMM YYYY")}
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col space-y-2">
                      <span className="text-black font-bold">
                        Yapılacaklar listesi ve notlar
                      </span>
                      <div className="flex items-center justify-center space-x-2">
                        <Input className="text-black font-semibold" />
                        <Button variant="default">Ekle</Button>
                      </div>
                      <div className="border border-zinc-200 rounded-lg p-4">
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                        <Button
                          variant={"destructive"}
                          className="space-x-2 items-center justify-center m-1"
                        >
                          <Icon name="Trash2" size={18} color="#fff" />
                          <span className="text-white font-bold">Gün</span>
                        </Button>
                      </div>
                    </div>
                  </DialogDescription>
                  <DialogFooter className="sm:justify-start w-full">
                    <DialogClose asChild>
                      <Button type="submit" className="w-full mt-2">
                        Kaydet
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )
        )}
      </div>
    </div>
  );
}
