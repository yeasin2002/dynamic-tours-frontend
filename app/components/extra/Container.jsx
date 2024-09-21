export default function Container({ children }) {
  return (
    <>
      <div className="container px-2 md:px-0">{children}</div>
    </>
  );
}
