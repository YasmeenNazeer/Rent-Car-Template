
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return( 
    <div className='justify-center items-center flex h-screen bg-blue-300'>

  <SignIn  />
  </div>
  )
}