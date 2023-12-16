"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePost() {
  const {user} = useUser();
  const router = useRouter();
  const [name, setName] = useState("");

  const createPost = api.postp.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <div className="flex w-full gap-3">
      <img src={user?.imageUrl} alt="Profile Image" className="h-16 w-16 rounded-full"/>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ content: name});
        }}
        className="flex gap-3"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent outline-none flex w-96"
        />
        <div className="flex content-center place-content-center">
          <button
            type="submit"
            className="hover:bg-white/20 flex"
            disabled={createPost.isLoading}
          >
            {createPost.isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
