import { auth } from "@hellocoop/nextjs";
import { ContinueButton, HelloProvider, LoggedIn, LoggedOut } from "@hellocoop/nextjs/react";
import Hero from "@/components/Hero";
import Prompt from "@/components/Prompt";
import Info from "@/components/Info";
import Layout from "@/components/Layout";

export default async function HomePage() {
  const user = await auth();
  return (
    <div>
      hello
    </div>
  );
}

// client retrieves auth

// 'use client'

// import Hero from "@/components/Hero";
// import Prompt from "@/components/Prompt";
// import Info from "@/components/Info";
// import Layout from "@/components/Layout";
// import { ContinueButton, LoggedIn, LoggedOut } from "@hellocoop/nextjs/react"

// export default function Home() {  
//   return (
//     <Layout>
//       <LoggedIn>
//           <Hero/>
//       </LoggedIn>
//       <LoggedOut>
//           <Prompt/>
//           {/* [ ō Continue with Hellō ] */}
//           <ContinueButton theme="aware-static" hover="flare" providerHint="google github gitlab" />
//           {/* Default <ContinueButton color="black" theme="ignore-light" hover="pop" />  */}
//       </LoggedOut>
//       <Info/>
//     </Layout>
//   )
// }
