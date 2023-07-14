import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'
function MainPage() {
  return (
    <div className="min-h-screen bg-black">
      <img
        src="public/pics/_20220617nib_milkyway.jpg"
        alt="universe"
        className="flex items-center justify-center w-screen
         h-screen"
      />
      <div className="text-center">
        <Title />

        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
