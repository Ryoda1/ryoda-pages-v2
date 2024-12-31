// import Image from "next/image";
import "./btnUnderline.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSteam , faTelegram , faGithub , faSpotify} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex flex-col items-center gap-x-6 p-8 sm:before:flex-1 w-full">
        <span className="flex items-center justify-between max-w-full sm:w-1/2 w-full h-6">
          <div className="flex flex-row items-center gap-x-2">
            <span className="logo_text logo_prompt">
              $
            </span>
            <span className="logo_text logo_pathname">
              cd /h/neko/
            </span>
            <span className="logo_cursor" />
          </div>

        </span>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center justify-center flex-row w-full">
          <a
              className="transition-colors flex items-center justify-center text-sm w-12 h-12"
              href="https://steamcommunity.com/id/AsaNekoo/"
              target="_blank"
              rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="size-3/4" icon={faSteam}/>
          </a>
          <a
              className="transition-colors flex items-center justify-center text-sm w-12 h-12"
              href="https://t.me/asanekoo"
              target="_blank"
              rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="size-3/4" icon={faTelegram}/>
          </a>
          <a
              className="transition-colors flex items-center justify-center text-sm w-12 h-12"
              href="https://github.com/AsaNekoo"
              target="_blank"
              rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="size-3/4" icon={faGithub}/>
          </a>
          <a
              className="transition-colors flex items-center justify-center text-sm w-12 h-12"
              href="https://open.spotify.com/user/315bctmub2gcqdeg5eitiuuufixe"
              target="_blank"
              rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="size-3/4" icon={faSpotify}/>
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-8">
        <a
            className="flex items-center gap-2 btn"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          &lt; nobody
        </a>
        <a
          className="flex items-center gap-2 btn"
        >
          Neko Station
        </a>
        <a
          className="flex items-center gap-2 btn"
          href="https://ryoda1.github.io/Ryoda-sites/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ryoda &gt;
        </a>
      </footer>
    </div>
  );
}
