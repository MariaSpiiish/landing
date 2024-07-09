import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Popup from '../Popup/Popup.jsx';
import './App.css';
import { getPosts } from '../../utils/api.jsx';
import BackToTop from '../BackToTop/BackToTop.jsx';
import PopupForm from '../PopupForm/PopupForm.jsx';

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);
  

  useEffect(() => {
    getPosts()
      .then((data) => {
        setFetchedData(data);
      })
      .catch((err) => {
        console.log(`Ошибка в загрузке текущего пользователя: ${err}`);
      });
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <div className="page-container">
        <div className="page">
          <Header />
          <Main setSelectedItem={setSelectedItem} items={fetchedData} setIsPopupFormOpen={setIsPopupFormOpen} setIsPopupOpen={setIsPopupOpen}/>
          <Footer />
          <BackToTop />
          <PopupForm open={isPopupFormOpen} setOpen={setIsPopupFormOpen} />
          <Popup item={selectedItem} isOpen={isPopupOpen} close={closePopup}/>
        </div>
    </div>
  );
}

export default App;
