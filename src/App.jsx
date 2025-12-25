import Features from './Features.jsx';
import Hero from './Hero.jsx';
import Extensions from './Extensions.jsx';
import FAQs from './FAQs.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const App = () => {
    return (
        <>
            <html lang="en" class="scroll-smooth">
                <Header />
                <Hero />
                <Features />
                <Extensions />
                <FAQs />
                <Contact />
                <Footer />
            </html>
        </>
    )
}

export default App;
