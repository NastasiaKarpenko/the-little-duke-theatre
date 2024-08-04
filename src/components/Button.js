
import Link from 'next/link';

function Button({ href, buttonName, className = '' }) {
  return (
    <Link href={href} type="button" className={`my-2 bg-gradient-to-r from-sky-500 to-blue-400 hover:from-pink-500 hover:to-sky-500 text-white font-bold py-3 px-6 rounded flex align-middle justify-center text-center leading-4 ${className}`}>
        {buttonName}
    </Link>
  );
}

export default Button;
