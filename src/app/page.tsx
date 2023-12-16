import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import CreatePostWizard from "./_components/CreatePostWizard";
import { type RouterOutputs } from "~/trpc/shared";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["postp"]["getAll"][number]
const PostView = (props: PostWithUser) => {

  const {post, author} = props

  return (
    <div className="border-b border-dark-accent p-4 gap-3 flex" key = {post.id}>
      <Image src = {author.profilePicture} alt="Profile Image" className="h-14 w-14 rounded-full" width={56} height={56}/>
      <div className="flex flex-col">
        <div className="flex gap-1">
          <span>{`@${author.username}`}</span>
          <span>{` ·  ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
          <span>{post.content}</span>
      </div>
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