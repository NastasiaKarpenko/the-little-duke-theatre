import Link from "next/link";

function Button({ href, buttonName, className = "" }) {
  return (
    <Link href={href} type="button-styles" className={className}>
      {buttonName}
    </Link>
  );
}

export default Button;
