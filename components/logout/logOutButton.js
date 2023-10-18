import { SignOutButton } from "@clerk/nextjs";
export default function SignOut() {
  return (
    <div style={{fontFamily:"monospace", borderRadius:"50%"}}>
      <SignOutButton afterSignOutUrl="/"/>
    </div>
  );
}