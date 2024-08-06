import Image from "next/image"

const UserButton = () => {
  return (
    <div>
        <Image src="/no-user.png" alt="User" width={30} height={30} className="rounded-full"/>
    </div>
  )
}

export default UserButton