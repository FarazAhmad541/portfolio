import Sample from "../../components/Sample.mdx";
import { customeComponents } from "@/mdx-components";
import Header from "@/components/Header";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
export default function Page() {
  return (
    <div className=" flex flex-col justify-start items-start gap-2 p-2 w-11/12 mx-auto md:max-w-[800px] my-20 flex-grow">
      <Header />
      <Link
        href="/"
        className="flex max-h-fit justify-start items-center w-fit pb-4 gap-5 text-secondaryLight hover:text-light cursor-pointer transition-transform col-span-full"
      >
        <MoveLeft />
        <p>Back To Home</p>
      </Link>
      <Sample components={customeComponents} />
    </div>
  );
}
