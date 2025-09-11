'use client';
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,       
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Learn with the best
                </p>
            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:p-6 ">
                {featuredCourses.map((course:Course) => (
                    <div key ={course.id}className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mt-4 mb-3 dark:from-teal-300 dark:to-blue-400">
                                    {course.title}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-8 flex items-center">        
                                    {course.description}
                                </p>
                                <Link href={`/courses/${course.slug}`}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                                Learn More
                                </Link>

                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"} className="inline-block px-8 py-4 rounded-xl border-2 border-teal-500 text-teal-400 bg-transparent font-semibold text-lg hover:bg-teal-500 hover:text-white hover:border-teal-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/25">
                View all courses
            </Link>
        </div>

    </div>
  )
}

export default FeaturedCourses