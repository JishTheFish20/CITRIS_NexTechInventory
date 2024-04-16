// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { getRobots } from '@/app/api/getRobots/route'
export default async function Page() {
    const data = await getRobots();
    return(
        <div>
            <h1>Hello, Dashboard Page!</h1>
            <p>{}</p>
        </div>
    ) 
  }