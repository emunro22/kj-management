/** The notched grey band that separates the accreditation strip from Services. */
export default function ChevronDivider() {
  return (
    <div aria-hidden="true" className="-mb-px bg-white">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[52px] w-full sm:h-[80px]"
      >
        <path d="M0 0L720 78L1440 0V90H0V0Z" fill="#E8E9E9" />
      </svg>
    </div>
  );
}
