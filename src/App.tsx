/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PracticeSection from './components/PracticeSection';
import PreparationSection from './components/PreparationSection';
import ContentSection from './components/ContentSection';
import TechniqueSection from './components/TechniqueSection';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeSection />
      <PreparationSection />
      <ContentSection />
      <TechniqueSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
