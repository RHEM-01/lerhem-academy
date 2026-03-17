"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
  title: string;
  describtion: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "  Comprehensive Courses",
    describtion: "Access a wide range of courses taught by expert instructors, covering various subjects and skill levels.",
    icon: "📚"
  },
  {
    title: "  Interactive Learning",
    describtion: "Engage with hands-on projects, quizzes, and assignments to reinforce your learning.",
    icon: "🎓"
  },
  {
    title: "  Flexible Schedule",
    describtion: "Learn at your own pace with 24/7 access to course materials and lectures.",
    icon: "⏰"
  },
  {
    title: "  Progress Tracking",
    describtion: "Monitor your learning journey with detailed analytics and progress reports.",
    icon: "📊"
  }
]

export default function Home() {
  return (
    <>
    <section className="relative py-20">
      <div className="flex flex-col items-center text-center space-y-8">
        <Badge variant="outline">
          The Future of Online Education
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"> 
          Elevate your Learning Experience
        </h1>
        <p className="max-w-[700px] text=muted-foregroup md:text-xl">
          Discover a new way to learn with our modern, interactive Learning Management System. Access high-quality courses anytime, and anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="" className={buttonVariants({
            size: "lg"
          })}>
            Explore Courses
          </Link>

          <Link href="/login" className={
            buttonVariants({
            size: "lg",
            variant: "outline"
          })}>
            Sign in
          </Link>
        </div>
      </div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <CardTitle>
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{feature.describtion}</p>
          </CardContent>
        </Card>
      ))}
    </section>
    </>
  );
}
