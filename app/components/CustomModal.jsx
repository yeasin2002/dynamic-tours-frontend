export default function CustomModal({ children, scrolable }) {
  return (
    <>
      <div className="bg-[#000000a7] h-full w-full overflow-y-hidden p-4 absolute z-50 top-0 left-0">
        {children}
      </div>
    </>
  );
}
