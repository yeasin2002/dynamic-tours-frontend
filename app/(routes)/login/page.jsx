import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        console.log(await signIn("credentials", formData));
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
