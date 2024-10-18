"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function BlogArticleForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();
  const [slug, setSlug] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ title, description, date, slug, isPublished });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow"
    >
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 min-w-0">
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter article title"
            />
          </div>

          <div className="flex-1 min-w-0">
            <Label htmlFor="slug" className="sr-only">
              Slug
            </Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              placeholder="enter-url-slug"
            />
          </div>

          <div className="w-full md:w-auto">
            <Label className="sr-only">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full md:w-[180px] justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isPublished"
              checked={isPublished}
              onCheckedChange={(checked) => setIsPublished(checked as boolean)}
            />
            <Label htmlFor="isPublished">Published</Label>
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="sr-only">
            Short Description
          </Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter a short description"
            rows={3}
          />
        </div>
      </div>

      <Button type="submit" className="w-full mt-6">
        Create Article
      </Button>
    </form>
  );
}
