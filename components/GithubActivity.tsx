"use client"

import GitHubCalendar from "react-github-calendar"

export default function GithubActivity(){

return(

<section id="github" className="py-40 text-center">

<h2 className="text-5xl font-bold mb-20">
GitHub Activity
</h2>

<div className="flex justify-center">

<GitHubCalendar
username="Samael1125"
blockSize={15}
blockMargin={5}
fontSize={16}
/>

</div>

</section>

)

}