import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import CreatePostWizard from "./_components/CreatePostWizard";
import { RouterOutputs } from "~/trpc/shared";

type PostWithUser = RouterOutputs["postp"]["getAll"][number]
const PostView = (props: PostWithUser) => {

  const {post, author} = props

  return (
    <div className="border-b border-dark-accent p-8" key = {post.id}>
      <img src = {author.profilePicture}></img>
      {post.content}
    </div>
  )
}

export default async function Home() {
  const session = getServerAuthSession();
  const data  = await api.postp.getAll.query();
  return (
    <main className="flex h-full justify-center">
      <div className="h-full w-full border-x md:max-w-2xl border-dark-accent">
        <div className="border-b border-dark-accent p-4">
          <CreatePostWizard/>
        </div>
        <div className="flex flex-col">
          {[...data,]?.map((fullPost) => (
            <PostView {...fullPost} key = {fullPost.post.id}/>
          ))}
        </div>
      </div>
    </main>
  );
}