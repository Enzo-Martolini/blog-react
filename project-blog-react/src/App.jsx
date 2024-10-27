import { useEffect, useState } from 'react'
import { useHashNavigation } from './helpers/useHashNavigation'
import { PageNotFound } from './pages/PageNotFound'
import { Contact } from './pages/Contact'
import { Post } from './pages/Post'
import { Home } from './pages/home'
import { Header } from './components/header'
import { useFetch } from './helpers/useFetch'

function App() {

  const {page, param} = useHashNavigation()
  console.log(page)

  function getContentPage (page){
      if (page.includes('contact')) {
        return <Contact />;
      } else if (page.includes('home')) {
        return <Home />;
      } else if (page.includes('post')) {
        return <Post id={param}/>;
      } else {
        return <PageNotFound />;
      }
  }
  let contentPage = getContentPage(page)

  return (
    <>
    <Header page={page}/>
    <div className='container my-3'>
      {contentPage}
    </div>
    </>
  )
}

export default App
