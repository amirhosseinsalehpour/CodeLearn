import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";

import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

type CourseCardListProps = {
  courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  return res.json();
}

export const CourseCardList: React.FC<CourseCardListProps> = async () => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
