import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  href?: string;
  theme?: "dark" | "light";
  width?: number;
};

export function SiteLogo({
  className = "",
  href = "/",
  theme = "dark",
  width = 260,
}: SiteLogoProps) {
  const src =
    theme === "dark" ? "/emerald-logo-dark.svg" : "/emerald-logo-light.svg";

  return (
    <Link
      aria-label="Emerald Solar Solutions home"
      className={`inline-flex items-center ${className}`.trim()}
      href={href}
    >
      <Image
        priority
        alt="Emerald Solar Solutions logo"
        height={Math.round(width * 0.209)}
        src={src}
        width={width}
      />
    </Link>
  );
}
