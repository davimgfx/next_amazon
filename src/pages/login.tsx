import { LoginLayout } from "@/components";

const Login = () => {
  return (
    <section>
      <LoginLayout />
      <p>
        By continuing, you agree to Amazons Conditions of Use and Privacy
        Notice.
      </p>
      <div>
        <p>Need help?</p>
        <p>Forgot your password?</p>
        <p>Other issues with Sign-In</p>
      </div>
      <p>New to Amazon</p>
      <button>Create your Amazon account</button>
      <div>
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
        <p>Help</p>
      </div>
      <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
    </section>
  );
};

export default Login;
