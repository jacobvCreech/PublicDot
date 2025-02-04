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
// Update on 2024-10-15 14:43:22: Refactored function - 4044
// Update on 2024-10-15 08:12:30: Updated dependencies - 3635
// Update on 2024-10-16 13:08:08: Minor documentation update - 4871
// Update on 2024-10-17 18:36:28: Improved performance - 8392
// Update on 2024-10-17 09:02:11: Added new feature - 8278
// Update on 2024-10-17 15:57:15: Code cleanup - 7135
// Update on 2024-10-18 16:52:33: Improved performance - 4889
// Update on 2024-10-18 21:28:48: Code cleanup - 1992
// Update on 2024-10-18 09:21:02: Updated README - 8682
// Update on 2024-10-19 13:27:18: Refactored function - 7835
// Update on 2024-10-19 13:25:20: Minor documentation update - 4630
// Update on 2024-10-19 16:54:14: Added new feature - 4452
// Update on 2024-10-20 18:27:24: Updated dependencies - 1471
// Update on 2024-10-20 15:56:38: Minor documentation update - 6385
// Update on 2024-10-20 21:09:27: Improved performance - 1661
// Update on 2024-10-21 21:33:35: Code cleanup - 5456
// Update on 2024-10-21 19:14:11: Updated dependencies - 3875
// Update on 2024-10-22 18:50:29: Small UI tweak - 4803
// Update on 2024-10-22 09:08:33: Fix minor bug - 9376
// Update on 2024-10-22 13:03:12: Refactored some code - 6945
// Update on 2024-10-23 10:26:59: Added new feature - 2301
// Update on 2024-10-23 14:44:18: Minor documentation update - 6327
// Update on 2024-10-23 18:41:15: Minor documentation update - 5982
// Update on 2024-10-24 19:23:37: Small UI tweak - 4229
// Update on 2024-10-24 12:38:04: Updated dependencies - 9614
// Update on 2024-10-24 10:06:31: Small UI tweak - 5511
// Update on 2024-10-25 09:52:08: Minor documentation update - 2255
// Update on 2024-10-26 13:12:13: Refactored some code - 5501
// Update on 2024-10-26 18:14:13: Refactored function - 2424
// Update on 2024-10-27 19:57:20: Code cleanup - 4405
// Update on 2024-10-27 16:32:23: Code cleanup - 6914
// Update on 2024-10-28 17:26:58: Refactored some code - 2289
// Update on 2024-10-29 11:13:19: Updated README - 8074
// Update on 2024-10-29 12:57:17: Improved performance - 4156
// Update on 2024-10-29 20:43:53: Code cleanup - 8585
// Update on 2024-10-30 08:58:20: Refactored function - 8352
// Update on 2024-10-31 11:45:35: Small UI tweak - 8133
// Update on 2024-11-01 15:45:20: Small UI tweak - 9032
// Update on 2024-11-01 21:31:28: Updated README - 2998
// Update on 2024-11-01 09:12:45: Refactored some code - 3035
// Update on 2024-11-02 08:10:05: Minor documentation update - 3321
// Update on 2024-11-02 20:45:02: Fix minor bug - 7593
// Update on 2024-11-02 18:42:44: Refactored some code - 1539
// Update on 2024-11-03 17:00:41: Refactored function - 2939
// Update on 2024-11-04 12:45:27: Refactored some code - 8933
// Update on 2024-11-04 09:02:38: Minor documentation update - 6860
// Update on 2024-11-05 21:14:28: Code cleanup - 3796
// Update on 2024-11-06 18:39:59: Updated dependencies - 8926
// Update on 2024-11-07 15:38:43: Updated README - 8455
// Update on 2024-11-08 14:46:18: Small UI tweak - 8886
// Update on 2024-11-08 09:04:56: Fix minor bug - 9228
// Update on 2024-11-09 08:37:35: Added new feature - 3318
// Update on 2024-11-09 16:50:06: Refactored function - 6534
// Update on 2024-11-09 11:15:34: Fix minor bug - 7320
// Update on 2024-11-10 09:16:22: Added new feature - 6825
// Update on 2024-11-10 13:01:15: Updated README - 4712
// Update on 2024-11-10 16:37:04: Updated README - 8801
// Update on 2024-11-11 10:47:32: Fix minor bug - 5844
// Update on 2024-11-11 08:38:01: Updated dependencies - 5655
// Update on 2024-11-12 12:33:14: Updated dependencies - 9691
// Update on 2024-11-13 16:13:32: Code cleanup - 6820
// Update on 2024-11-14 17:58:30: Minor documentation update - 5172
// Update on 2024-11-14 13:18:40: Small UI tweak - 5565
// Update on 2024-11-14 13:08:39: Minor documentation update - 4714
// Update on 2024-11-15 18:27:29: Refactored some code - 7144
// Update on 2024-11-15 08:45:54: Updated README - 8798
// Update on 2024-11-16 22:20:38: Small UI tweak - 2537
// Update on 2024-11-16 16:44:48: Code cleanup - 9618
// Update on 2024-11-16 20:45:14: Code cleanup - 2853
// Update on 2024-11-17 19:15:46: Small UI tweak - 3606
// Update on 2024-11-18 10:10:58: Refactored some code - 5064
// Update on 2024-11-18 20:40:47: Updated dependencies - 2927
// Update on 2024-11-19 08:55:20: Updated README - 2492
// Update on 2024-11-19 14:28:27: Fix minor bug - 1661
// Update on 2024-11-20 16:34:10: Fix minor bug - 1323
// Update on 2024-11-20 14:40:35: Minor documentation update - 9902
// Update on 2024-11-20 11:14:01: Improved performance - 7312
// Update on 2024-11-21 20:54:13: Small UI tweak - 8250
// Update on 2024-11-22 11:30:57: Refactored function - 4464
// Update on 2024-11-22 15:37:09: Updated dependencies - 9753
// Update on 2024-11-23 14:40:27: Updated README - 2998
// Update on 2024-11-24 11:34:25: Added new feature - 1109
// Update on 2024-11-25 17:57:00: Fix minor bug - 7370
// Update on 2024-11-25 18:45:32: Fix minor bug - 2948
// Update on 2024-11-26 19:52:56: Improved performance - 9393
// Update on 2024-11-26 09:04:37: Added new feature - 4962
// Update on 2024-11-27 11:00:03: Added new feature - 2270
// Update on 2024-11-27 08:38:05: Refactored function - 7661
// Update on 2024-11-28 18:54:05: Added new feature - 9845
// Update on 2024-11-28 09:58:38: Minor documentation update - 4925
// Update on 2024-11-29 20:58:30: Added new feature - 7048
// Update on 2024-11-29 22:43:08: Refactored some code - 4433
// Update on 2024-11-30 22:37:10: Updated dependencies - 8557
// Update on 2024-12-01 18:18:21: Refactored function - 2632
// Update on 2024-12-02 09:59:25: Added new feature - 7420
// Update on 2024-12-02 21:50:01: Code cleanup - 4543
// Update on 2024-12-03 13:24:41: Refactored some code - 9178
// Update on 2024-12-03 18:30:47: Added new feature - 5911
// Update on 2024-12-04 14:02:48: Updated dependencies - 2099
// Update on 2024-12-04 09:29:51: Minor documentation update - 2274
// Update on 2024-12-04 18:40:33: Improved performance - 8134
// Update on 2024-12-05 19:25:12: Small UI tweak - 1758
// Update on 2024-12-05 12:17:36: Updated README - 5053
// Update on 2024-12-06 18:30:14: Updated README - 2933
// Update on 2024-12-06 11:01:00: Updated dependencies - 3156
// Update on 2024-12-07 15:07:54: Fix minor bug - 5803
// Update on 2024-12-07 12:00:00: Updated README - 1033
// Update on 2024-12-07 08:51:17: Updated README - 5195
// Update on 2024-12-08 21:18:40: Updated dependencies - 5881
// Update on 2024-12-09 10:10:24: Refactored some code - 2709
// Update on 2024-12-10 13:26:42: Code cleanup - 1835
// Update on 2024-12-10 21:06:34: Updated dependencies - 5315
// Update on 2024-12-10 14:51:10: Fix minor bug - 9420
// Update on 2024-12-11 15:07:29: Fix minor bug - 9667
// Update on 2024-12-11 22:03:01: Updated README - 3012
// Update on 2024-12-11 08:26:14: Refactored function - 9247
// Update on 2024-12-12 19:11:15: Improved performance - 5787
// Update on 2024-12-12 14:34:03: Improved performance - 9532
// Update on 2024-12-13 15:04:51: Small UI tweak - 5211
// Update on 2024-12-13 21:00:52: Added new feature - 4475
// Update on 2024-12-13 19:57:12: Added new feature - 1307
// Update on 2024-12-14 22:38:12: Updated README - 6232
// Update on 2024-12-14 10:45:42: Refactored some code - 5175
// Update on 2024-12-14 16:02:06: Updated README - 5602
// Update on 2024-12-15 17:31:56: Refactored function - 6834
// Update on 2024-12-15 13:33:48: Small UI tweak - 3039
// Update on 2024-12-15 14:42:50: Fix minor bug - 6078
// Update on 2024-12-16 19:07:55: Refactored function - 6004
// Update on 2024-12-16 18:15:46: Refactored function - 8656
// Update on 2024-12-17 12:58:23: Improved performance - 6188
// Update on 2024-12-17 12:16:06: Refactored some code - 6043
// Update on 2024-12-17 08:51:09: Refactored some code - 5667
// Update on 2024-12-18 16:22:19: Updated dependencies - 5396
// Update on 2024-12-18 11:56:21: Small UI tweak - 1910
// Update on 2024-12-18 19:37:56: Refactored some code - 6672
// Update on 2024-12-19 12:04:21: Fix minor bug - 9704
// Update on 2024-12-20 08:21:52: Refactored function - 7141
// Update on 2024-12-20 22:06:21: Added new feature - 8652
// Update on 2024-12-20 11:07:52: Fix minor bug - 5363
// Update on 2024-12-21 22:10:17: Added new feature - 8537
// Update on 2024-12-21 17:31:34: Updated README - 8875
// Update on 2024-12-21 18:51:02: Refactored function - 1900
// Update on 2024-12-22 11:29:00: Minor documentation update - 9413
// Update on 2024-12-23 20:12:58: Refactored some code - 5353
// Update on 2024-12-23 08:50:41: Improved performance - 3895
// Update on 2024-12-23 16:40:00: Refactored function - 6307
// Update on 2024-12-24 12:34:30: Improved performance - 2757
// Update on 2024-12-25 10:53:58: Minor documentation update - 9071
// Update on 2024-12-26 12:59:33: Minor documentation update - 6674
// Update on 2024-12-26 15:33:36: Refactored some code - 5994
// Update on 2024-12-26 12:23:05: Updated README - 4124
// Update on 2024-12-27 22:22:00: Updated dependencies - 6088
// Update on 2024-12-27 10:54:35: Refactored function - 5407
// Update on 2024-12-28 08:57:35: Improved performance - 7831
// Update on 2024-12-29 22:25:25: Added new feature - 6340
// Update on 2024-12-29 16:12:40: Small UI tweak - 4445
// Update on 2024-12-29 16:44:37: Updated dependencies - 6764
// Update on 2024-12-30 22:15:35: Code cleanup - 1261
// Update on 2024-12-30 17:23:30: Refactored function - 5098
// Update on 2024-12-30 08:45:21: Refactored some code - 2353
// Update on 2024-12-31 13:53:29: Added new feature - 3848
// Update on 2024-12-31 12:28:33: Refactored some code - 5000
// Update on 2025-01-01 08:56:50: Improved performance - 9005
// Update on 2025-01-02 09:00:18: Code cleanup - 3323
// Update on 2025-01-02 19:16:42: Refactored function - 5474
// Update on 2025-01-03 15:48:46: Fix minor bug - 2048
// Update on 2025-01-04 19:33:07: Updated dependencies - 4762
// Update on 2025-01-05 08:15:47: Added new feature - 5697
// Update on 2025-01-05 09:17:35: Added new feature - 3650
// Update on 2025-01-06 08:12:15: Added new feature - 4059
// Update on 2025-01-06 16:10:30: Added new feature - 5221
// Update on 2025-01-06 11:14:47: Improved performance - 6390
// Update on 2025-01-07 20:13:16: Updated dependencies - 3624
// Update on 2025-01-08 17:08:59: Minor documentation update - 1640
// Update on 2025-01-09 10:30:59: Code cleanup - 3138
// Update on 2025-01-10 15:32:31: Refactored some code - 7228
// Update on 2025-01-10 16:09:06: Added new feature - 5538
// Update on 2025-01-10 19:21:35: Refactored some code - 4441
// Update on 2025-01-11 10:02:16: Minor documentation update - 9402
// Update on 2025-01-11 08:58:13: Fix minor bug - 4778
// Update on 2025-01-12 12:59:48: Refactored function - 4844
// Update on 2025-01-12 14:10:15: Fix minor bug - 1044
// Update on 2025-01-13 09:30:22: Refactored some code - 1984
// Update on 2025-01-14 12:36:00: Fix minor bug - 3246
// Update on 2025-01-14 08:11:44: Updated README - 7615
// Update on 2025-01-14 21:14:18: Updated dependencies - 8463
// Update on 2025-01-15 18:14:14: Updated README - 5272
// Update on 2025-01-15 20:12:12: Improved performance - 9713
// Update on 2025-01-15 18:25:22: Small UI tweak - 2513
// Update on 2025-01-16 09:51:09: Improved performance - 2054
// Update on 2025-01-16 11:45:02: Updated README - 6677
// Update on 2025-01-17 19:00:01: Added new feature - 6696
// Update on 2025-01-18 08:39:04: Fix minor bug - 3659
// Update on 2025-01-18 22:08:56: Small UI tweak - 6380
// Update on 2025-01-19 14:47:31: Improved performance - 7267
// Update on 2025-01-20 13:04:33: Added new feature - 5169
// Update on 2025-01-20 18:32:43: Minor documentation update - 9803
// Update on 2025-01-20 19:26:08: Fix minor bug - 8357
// Update on 2025-01-21 08:21:27: Added new feature - 1099
// Update on 2025-01-21 11:03:22: Updated dependencies - 6645
// Update on 2025-01-21 18:12:21: Small UI tweak - 3732
// Update on 2025-01-22 18:58:41: Fix minor bug - 3173
// Update on 2025-01-22 14:30:05: Fix minor bug - 6554
// Update on 2025-01-23 09:36:29: Added new feature - 4490
// Update on 2025-01-23 09:30:03: Updated dependencies - 1565
// Update on 2025-01-23 18:19:45: Minor documentation update - 6859
// Update on 2025-01-24 09:39:11: Fix minor bug - 3985
// Update on 2025-01-24 18:43:23: Fix minor bug - 6978
// Update on 2025-01-25 08:04:30: Added new feature - 7378
// Update on 2025-01-25 15:00:59: Fix minor bug - 3902
// Update on 2025-01-25 19:37:02: Refactored some code - 6166
// Update on 2025-01-26 08:43:14: Refactored function - 7708
// Update on 2025-01-26 21:18:23: Refactored some code - 4300
// Update on 2025-01-26 18:21:29: Improved performance - 5824
// Update on 2025-01-27 13:06:07: Improved performance - 6776
// Update on 2025-01-27 17:46:05: Code cleanup - 9430
// Update on 2025-01-27 22:27:29: Refactored function - 6150
// Update on 2025-01-28 12:14:52: Updated dependencies - 9483
// Update on 2025-01-28 08:07:22: Improved performance - 3526
// Update on 2025-01-28 19:37:44: Small UI tweak - 7164
// Update on 2025-01-29 09:30:37: Added new feature - 9569
// Update on 2025-01-29 10:56:44: Refactored some code - 3336
// Update on 2025-01-30 22:41:25: Fix minor bug - 5740
// Update on 2025-01-31 19:48:17: Small UI tweak - 5283
// Update on 2025-01-31 22:49:35: Minor documentation update - 3998
// Update on 2025-01-31 19:23:27: Updated README - 4621
// Update on 2025-02-01 12:00:01: Added new feature - 6128
// Update on 2025-02-01 08:44:35: Added new feature - 2299
// Update on 2025-02-01 10:46:36: Updated dependencies - 1062
// Update on 2025-02-02 15:41:28: Improved performance - 9892
// Update on 2025-02-02 10:49:55: Fix minor bug - 4219
// Update on 2025-02-03 12:56:05: Small UI tweak - 6860
// Update on 2025-02-03 16:08:47: Improved performance - 3906
// Update on 2025-02-04 18:44:37: Code cleanup - 3393
// Update on 2025-02-04 20:50:55: Added new feature - 7558
