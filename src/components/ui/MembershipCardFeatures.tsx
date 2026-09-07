import CheckedBoxIcon from "../icons/CheckedBoxIcon";

type MembershipCardFeaturesProps = {
  features: string[];
};

export default function MembershipCardFeatures({ features }: MembershipCardFeaturesProps) {
  return (
    <ul className="space-y-4">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-center gap-x-3 text-neutral-700 text-xl leading-140 tracking-tight-1"
        >
          <CheckedBoxIcon className="size-5 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
