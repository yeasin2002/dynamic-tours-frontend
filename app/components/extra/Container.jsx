export default function Container({ children, className }) {
  return (
    <>
      <div className={`container px-2 md:px-0  ${className}`}>{children}</div>
    </>
  );
}
