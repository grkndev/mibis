import React from 'react';
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import moment from "moment";
import "moment/locale/tr";
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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "@/lib/Icon";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Calendar() {
  const today = moment();
  const firstDayOfMonth = moment(today).startOf('month');
  const daysInMonth = today.daysInMonth();
  const dayOfWeek = firstDayOfMonth.day();

  // Adjusting for Monday as the first day of the week
  const startingDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const shortDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts', 'Paz'];

  const getBorderClasses = (index: number) => {
    const adjustedIndex = index + startingDay;
    const row = Math.floor(adjustedIndex / 7);
    const col = adjustedIndex % 7;

    const isFirstRow = row === 0;
    const isLastRow = row === Math.floor((daysInMonth + startingDay - 1) / 7);
    const isFirstInRow = col === 0;
    const isLastInRow = col === 6;

    return cn(
      "border-zinc-200",
      (isFirstRow || row === 1) ? "border-t" : "",
      isLastRow ? "border-b" : "",
      (isFirstInRow || index === 0) ? "border-l" : "",
      isLastInRow ? "border-r" : "",
      "border-r border-b" // Always add right and bottom borders
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        {today.format("MMMM YYYY")}
      </h2>
      <div className="grid grid-cols-7 text-center text-sm font-medium text-muted-foreground">
        {days.map((day, index) => (
          <React.Fragment key={day}>
            <div className="hidden sm:block">{day.toUpperCase()}</div>
            <div className="sm:hidden">{shortDays[index]}</div>
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-2 text-center text-sm h-auto md:h-[600px] overflow-y-auto">
        {Array.from({ length: startingDay }).map((_, index) => (
          <div key={`empty-${index}`} className={cn(
            "p-4",
            "border-zinc-200",
            "border-t border-l",
            index === startingDay - 1 ? "border-r" : ""
          )}></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const currentDate = moment(firstDayOfMonth).add(index, 'days');
          return (
            <Sheet key={index}>
              <SheetTrigger
                className={cn(
                  "p-4 hover:bg-zinc-100 flex flex-row md:flex-col justify-between items-center md:items-start",
                  getBorderClasses(index),
                  currentDate.isSame(today, 'day')
                    ? "bg-red-300 hover:bg-red-300"
                    : "",
                )}
              >
                <div className="font-bold text-lg">{index + 1}</div>
                <div className="flex-col space-y-1">
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
                    {currentDate.format("DD MMMM YYYY")}
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
                          <Card
                            key={i}
                            className="space-x-2 flex flex-row items-center justify-between space-y-1 p-2 my-2"
                          >
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
                  <DialogClose asChild>
                    <Button type="submit" className="w-full mt-2">
                      Kaydet
                    </Button>
                  </DialogClose>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          );
        })}
      </div>
    </div>
  );
}