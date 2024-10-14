import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
// hi// Update on 2024-09-19 16:19:35: Refactored some code - 8952
// Update on 2024-09-19 08:55:54: Updated dependencies - 7307
// Update on 2024-09-19 16:39:38: Fix minor bug - 4311
// Update on 2024-09-20 09:04:57: Minor documentation update - 1436
// Update on 2024-09-20 18:38:26: Minor documentation update - 3296
// Update on 2024-09-21 12:09:28: Refactored some code - 3279
// Update on 2024-09-21 11:20:05: Small UI tweak - 1063
// Update on 2024-09-21 14:50:11: Small UI tweak - 7655
// Update on 2024-09-22 15:44:51: Updated README - 6560
// Update on 2024-09-22 21:55:22: Fix minor bug - 4551
// Update on 2024-09-23 09:56:33: Minor documentation update - 5752
// Update on 2024-09-24 20:23:56: Improved performance - 3983
// Update on 2024-09-24 18:53:06: Fix minor bug - 7238
// Update on 2024-09-24 09:59:54: Improved performance - 1209
// Update on 2024-09-25 11:52:35: Small UI tweak - 1331
// Update on 2024-09-25 18:01:26: Fix minor bug - 5298
// Update on 2024-09-26 21:22:26: Minor documentation update - 3609
// Update on 2024-09-27 09:49:35: Small UI tweak - 9088
// Update on 2024-09-27 10:41:58: Code cleanup - 9484
// Update on 2024-09-28 17:36:25: Refactored function - 7980
// Update on 2024-09-28 16:49:08: Minor documentation update - 9916
// Update on 2024-09-28 17:11:35: Code cleanup - 1297
// Update on 2024-09-29 10:17:14: Small UI tweak - 6316
// Update on 2024-09-29 10:07:04: Refactored some code - 4169
// Update on 2024-09-29 12:37:49: Updated README - 2287
// Update on 2024-09-30 14:19:37: Improved performance - 5138
// Update on 2024-10-01 22:10:02: Minor documentation update - 7674
// Update on 2024-10-01 10:59:25: Updated README - 9348
// Update on 2024-10-01 21:26:32: Improved performance - 8684
// Update on 2024-10-02 12:50:07: Added new feature - 9954
// Update on 2024-10-03 17:38:23: Improved performance - 1048
// Update on 2024-10-03 09:48:58: Updated README - 5416
// Update on 2024-10-04 17:47:25: Refactored some code - 3153
// Update on 2024-10-04 19:50:21: Fix minor bug - 5750
// Update on 2024-10-05 15:39:28: Updated README - 2569
// Update on 2024-10-05 20:32:41: Updated dependencies - 8756
// Update on 2024-10-06 21:11:09: Updated README - 9534
// Update on 2024-10-06 22:35:02: Code cleanup - 3471
// Update on 2024-10-06 13:11:41: Refactored function - 6292
// Update on 2024-10-07 21:59:28: Code cleanup - 1079
// Update on 2024-10-07 12:00:47: Added new feature - 2034
// Update on 2024-10-07 18:28:02: Fix minor bug - 7991
// Update on 2024-10-08 16:01:49: Fix minor bug - 8846
// Update on 2024-10-08 15:54:55: Fix minor bug - 1092
// Update on 2024-10-09 20:46:53: Updated README - 6490
// Update on 2024-10-09 15:36:18: Updated README - 2063
// Update on 2024-10-10 13:19:32: Fix minor bug - 4791
// Update on 2024-10-11 12:26:21: Small UI tweak - 2876
// Update on 2024-10-11 12:17:03: Added new feature - 9161
// Update on 2024-10-11 21:09:14: Refactored some code - 8434
// Update on 2024-10-12 14:50:15: Updated README - 4012
// Update on 2024-10-13 16:45:11: Improved performance - 8223
// Update on 2024-10-13 15:03:53: Added new feature - 9889
// Update on 2024-10-13 21:13:04: Minor documentation update - 3916
// Update on 2024-10-14 22:28:39: Code cleanup - 8073
// Update on 2024-10-14 22:59:56: Code cleanup - 2922
// Update on 2024-10-14 15:31:47: Added new feature - 2393
