import { UserButton } from "@clerk/nextjs";
 
export default function LogButton() {
  return (
    <div>
      <UserButton aftersignouturl="/"/>
    </div>
  )
}