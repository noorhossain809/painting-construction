import React from "react";
import { blogPosts } from "../data/projects";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsPage = () => {
  return (
    <div min-h-screen bg-background>
      <section className="relative h-[48vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/assets/mobile-engineers_1098-15445.jpg"
          alt="before-after"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(15, 36, 56, 0.35)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
            <div className=" text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight uppercase">
                News
              </h1>
              <p className="text-muted">Home/news</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-lg shadow-lg "
              >
                <div className="relative p-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 rounded-md bg-yellow-600 px-3 py-1 text-xs font-semibold uppercase text-white">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-medium text-gray-800 hover:text-yellow-600 transition-transform duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                  <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    {/* The category is now a badge on the image, but if you wanted it here too: */}
                    {/* <div className="flex items-center">
                    <span className="font-medium text-gray-600">{post.category}</span>
                  </div> */}
                  </div>
                  <p className="mb-6 text-gray-600">{post.description}</p>
                  <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
