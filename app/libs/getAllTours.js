export const getAllTours = async function () {
  const res = await fetch(`http://localhost:4000/api/v1/tours`);
  if (!res.ok) throw new Error("something went wrong");
  const data = await res.json();

  return data;
};
