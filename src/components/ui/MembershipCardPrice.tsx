type MembershipCardPriceProps = {
  price: string;
  hasPerMonth?: boolean;
};

export default function MembershipCardPrice({ price, hasPerMonth }: MembershipCardPriceProps) {
  return (
    <p
      className="font-semibold font-martian text-34 leading-130 tracking-tight-2"
      aria-label={hasPerMonth ? `${price} per month` : undefined}
    >
      {price}
      {hasPerMonth && (
        <span className="text-xl leading-140 tracking-tight-1 font-normal font-inter"> /month</span>
      )}
    </p>
  );
}
