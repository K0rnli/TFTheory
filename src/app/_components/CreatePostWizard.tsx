import {currentUser } from "@clerk/nextjs"
import { api } from "~/trpc/server";
import Image from "next/image";
/*
const CreatePostWizard = async () => {
    const user = await currentUser();
    const mutate = api.postp.create
    if (!user) return null;
    return (
        <div className="flex w-full gap-3">
            <Image src={user.imageUrl} alt="Profile Image" className="h-16 w-16 rounded-full" width={64} height={64}/>
            <input name="data"placeholder="Comment" type="text" className="bg-transparent grow"/>
            <button onClick={() => mutate.mutate({input})}>Post</button>
        </div>
    )
}


export default CreatePostWizard;
*/