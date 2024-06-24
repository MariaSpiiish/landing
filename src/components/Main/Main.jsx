import Intro from '../Intro/Intro';
import Promo from '../Promo/Promo';
import Services from '../Services/Services';
import RecentWork from '../RecentWork/RecentWork';
import VideoBlock from '../VideoBlock/VideoBlock';
import LatestNews from '../LatestNews/LatestNews';
import Testimonials from '../Testimonials/Testimonials';

// eslint-disable-next-line react/prop-types
function Main({ setSelectedItem, setIsPopupOpen, items }) {
  return (
    <main>
        <Intro />
        <Promo />
        <Services setSelectedItem={setSelectedItem} setIsPopupOpen={setIsPopupOpen} items={items}/>
        <RecentWork />
        <VideoBlock />
        <LatestNews />
        <Testimonials />
    </main>
  )
}

export default Main