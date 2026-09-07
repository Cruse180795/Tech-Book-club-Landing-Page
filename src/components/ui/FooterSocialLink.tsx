type FooterSocialLinkProps = {
  href: string;
  children: React.ReactNode;
  label?: string;
};

export default function FooterSocialLink({ href, children, label }: FooterSocialLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} aria-label={label}>
      {children}
    </a>
  );
}
