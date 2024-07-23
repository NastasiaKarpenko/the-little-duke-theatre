
import Link from 'next/link';

function Button({ href, buttonName }) {
  return (
    <Link href={href} type="button" class="mb-2 bg-gradient-to-r from-sky-500 to-blue-400 hover:from-pink-500 hover:to-sky-500 text-white font-bold py-3 px-6 rounded">
        {buttonName}
    </Link>
  );
}

export default Button;
