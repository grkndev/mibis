import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, CalendarDays, Mail } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Maiden_Orange } from "next/font/google";
export default function UserCard({ user }: { user: User }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={"ghost"}>
          <Badge variant={"outline"} className="rounded-lg">
            {user.name}
          </Badge>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-start space-x-4 ">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{user.name}</h4>
            <p className="text-sm">{user.position}</p>
            <div className="flex items-center pt-2">
              <Building className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {user.station}
              </span>
            </div>
            <div className="flex items-center pt-2">
              <Mail className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
