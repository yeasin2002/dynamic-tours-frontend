export default function SingleTour({ params }) {
  console.log(params);
  return (
    <>
      <h3>This one for single tour id</h3>
      {params.slug}
    </>
  );
}
