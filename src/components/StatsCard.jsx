export default function StatsCard({ children }) {
  return (
    <section
      className={
        "min-h-[250px] w-[47%]  bg-white shadow-sm  mx-auto p-8 text-[#afb2b2] leading-normal text-lg"
      }
    >
      {children}
    </section>
  );
}
