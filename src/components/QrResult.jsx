export default function QrResult({ children, className }) {
  return (
    <div
      className={
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 " +
        className
      }
    >
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        {children}
      </div>
    </div>
  );
}
