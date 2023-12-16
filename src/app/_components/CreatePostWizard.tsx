import {currentUser } from "@clerk/nextjs"
import Image from "next/image";

const CreatePostWizard = async () => {
    const user = await currentUser();
    if (!user) return null;
    return (
        <div className="flex w-full gap-3">
            <Image src={user.imageUrl} alt="Profile Image" className="h-16 w-16 rounded-full" width={64} height={64}/>
            <input placeholder="Comment" type="text" className="bg-transparent grow"/>
        </div>
    )
}


export default CreatePostWizard;