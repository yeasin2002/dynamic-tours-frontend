import { getTour } from "@/app/libs/getTour";

export default async function SingleTour({ params }) {
  console.log(params);
  const tourData = await getTour(params.slug);
  return (
    <>
      <h3>This one for single tour id</h3>
      <h3>{JSON.stringify(tourData)}</h3>
    </>
  );
}
