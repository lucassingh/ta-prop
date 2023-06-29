import Footer from './components/footer/Footer';
import Prefooter from './components/footer/Prefooter';
import Items from './components/items/Items';
import Navbar from './components/navbar/Navbar';
import About from './screens/About';
import Book from './screens/Book';
import Documentary from './screens/Documentary';
import Evolution from './screens/Evolution';
import Exibition from './screens/Exibition';
import Home from './screens/Home';
import Offer from './screens/Offer';
import Proposal from './screens/Proposal';
import Tour from './screens/Tour';
import Who from './screens/Who';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Who />
            <Tour />
            <Evolution />
            <Exibition />
            <Documentary />
            <Book />
            <Items />
            <Proposal />
            <Offer />
            <Prefooter />
            <Footer />
        </>
    );
}

export default App;
