import { ErrorHeader } from "./error-header";

import { BackButton } from "./back-button";

import { Card, CardFooter, CardHeader } from "../ui/card";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <div className=" p-3 rounded-md flex items-center gap-x-2 text-sm ">         
          <ErrorHeader label="Oops! Something went wrong" />
        </div>
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/login" />
      </CardFooter>
    </Card>
  );
};
