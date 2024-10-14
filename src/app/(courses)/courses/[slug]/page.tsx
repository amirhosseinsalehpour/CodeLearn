export default async function CoursesDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <h1>{slug}</h1>;
}
