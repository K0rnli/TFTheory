import {currentUser } from "@clerk/nextjs"




const CreatePostWizard = async () => {
    const user = await currentUser();
    if (!user) return null;
    return (
        <div className="flex w-full gap-3">
            <img src={user.imageUrl} alt="Profile Image" className="h-16 w-16 rounded-full"/>
            <input placeholder="Comment" type="text" className="bg-transparent grow"/>
        </div>
    )
}


export default CreatePostWizard;