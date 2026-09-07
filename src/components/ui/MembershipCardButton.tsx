type MembershipCardButtonProps = {
  label: string;
  className?: string;
};

export default function MembershipCardButton({ label, className }: MembershipCardButtonProps) {
  return (
    <button
      type="button"
      className={`cursor-pointer transition-colors ease-in-out duration-500 uppercase border-2 rounded-lg px-6 py-5 bg-light-salmon-50 border-neutral-900 text-neutral-900 font-semibold font-martian leading-130 tracking-tight-2 text-center w-full md:text-lg hover:bg-linear-to-r hover:from-light-salmon-100 hover:to-light-salmon-50 focus-visible:outline-2 focus-visible:outline-offset-4 ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
