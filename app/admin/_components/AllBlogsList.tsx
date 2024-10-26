"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { revalidateBlogsList } from "@/lib/actions";
import { deleteBlogById } from "@/lib/data";
import { BlogType } from "@/lib/definitions";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

type Props = {
  blogs: BlogType[] | [];
};

export default function AllBlogsList({ blogs }: Props) {
  const [blogToDelete, setBlogToDelete] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { signOut } = useAuth();

  const { mutate: deleteBlog, isPending } = useMutation({
    mutationFn: deleteBlogById,
    onSuccess: () => console.log("success"),
  });

  const handleDelete = (id: string) => {
    deleteBlog(id);
    setIsDialogOpen(false);
    revalidateBlogsList();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex flex-col p-5 md:p-0 gap-8 items-center justify-start mt-8 max-w-[800px] mx-auto">
      <div className="flex w-full justify-between items-center">
        <div className="flex  items-center gap-8">
          <h1 className="font-bold text-2xl md:text-4xl text-white">
            List of Blogs
          </h1>
          <Button className="bg-green-500 hover:bg-green-600 mt-3">
            <Link href={"/admin/add-new-blog"}>Add New</Link>
          </Button>
        </div>
        <Button
          className="bg-blue-500 text-white hover:bg-blue-600 mt-3"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
      {blogs?.map((blog, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row lg:flex-row gap-5 items-start w-full justify-between p-8 bg-gray-900 rounded-3xl"
        >
          <div className="block cursor-pointer text-secondaryLight rounded-lg mt-2 transition-all hover:text-light">
            <div className="flex justify-start items-start gap-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-light font-bold text-2xl">{blog.title}</h2>

                <div
                  className={clsx(
                    "px-4 py-2 rounded-full text-white w-fit",
                    blog.published ? "bg-green-600" : "bg-blue-500",
                  )}
                >
                  {blog.published ? "Published" : "Draft"}
                </div>
              </div>
            </div>
            <p className="mt-3">{blog.metaDescription}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={clsx(
                "px-6 py-2 mt-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600",
                isPending && "cursor-not-allowed pointer-events-none",
              )}
            >
              Actions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Blog Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={`/admin/edit-blog/${blog.id}`}>
                <DropdownMenuItem className="cursor-pointer">
                  Edit
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onSelect={(event) => {
                  event.preventDefault();
                  setBlogToDelete(blog.id);
                  setIsDialogOpen(true);
                }}
                className="bg-red-500 text-red-950 cursor-pointer focus:bg-red-600"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-dark">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-dark">
              This action will the delete the blog forever.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleDelete(blogToDelete)}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
