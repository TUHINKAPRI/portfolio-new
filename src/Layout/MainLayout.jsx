
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

function MainLayout({children}) {
  return (
    <div className='b'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout