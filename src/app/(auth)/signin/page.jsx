import SignInForm from "@/components/SignInForm";
import GoogleSignInButton from '@/components/GoogleSignInButton';

const SignInRoute = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <GoogleSignInButton />
      <SignInForm />
    </div>
  );
};

export default SignInRoute;
