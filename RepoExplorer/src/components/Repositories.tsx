import { Key, useState } from "react";

const Repositories = () => {
  const repo = ["javascript", "angular", "react", "typescript"];

  const [repos, setRepos] = useState(repo);

  return (
    <>
      <div className="flex w-full gap-5 items-center justify-center">
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 items-center justify-center">
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start my-10 border w-5/12 mx-7 p-7">
          <h2 className="text-4xl font-mono font-bold">Repo Name 1</h2>
          <p className="text-xl font-mono font-semibold">description 2</p>
          <div className="flex gap-3">
            {repos.map((repo: string, i: Key | null | undefined) => {
              return (
                <div className="" key={i}>
                  <p className="text-base font-mono font-bold">{repo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
