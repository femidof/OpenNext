import { Poppins } from "next/font/google";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}



export const ErrorHeader = ({ label }: HeaderProps) => {
    return (
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1 className={"text-3xl font-semibold"}>LOGO</h1>
          <p className={cn("text-muted-foreground text-sm", font.className)}>
        <span className="flex  p-3 rounded-md  bg-destructive/15 items-center gap-x-2 text-sm">
        <ExclamationTriangleIcon className="text-destructive/100 h-4 w-4"/> {label}
        </span>
          </p>
      </div>
    );
  };