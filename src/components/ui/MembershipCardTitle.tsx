type MembershipCardTitleProps = {
  title: string;
};

export default function MembershipCardTitle({ title }: MembershipCardTitleProps) {
  return <h3 className="font-semibold font-martian text-2xl leading-110 tracking-tight-2">{title}</h3>;
}
