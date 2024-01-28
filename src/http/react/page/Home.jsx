import React, { Suspense } from 'react'

const HomeModule = React.lazy(() => new Promise((resolve) => {
  setTimeout(resolve, 2000)
}).then(() => import('../component/HomeModule')))

function Home(props) {
  console.log('Home', props)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeModule {...props} />
    </Suspense>
  )
}
export default Home
