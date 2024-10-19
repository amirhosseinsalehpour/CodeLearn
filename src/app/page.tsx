import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/HomeHeroSection";
import { CourseCardList } from "./(courses)/courses/_components/course-card-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);

  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right ">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز موندن، یادگرفتن نکته های تازه ضروریه</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
