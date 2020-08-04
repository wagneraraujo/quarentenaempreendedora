import Header from '../components/Header'
import '../styles/styles.scss'

import Topo from '../components/Topo'
import Sobre from '../components/Sobre'
import Bonus from '../components/Bonus'
import CallToAction from '../components/CallToAction'
import Palestrantes from '../components/Palestrantes'
import Participar from '../components/Participar'
import Duvidas from '../components/Duvidas'
import Footer from '../components/Footer'
import Depoimentos from '../components/Depoimentos'
export default function Home() {
  return (
      <>
        <Header/>
        <Topo />
        <Sobre />
        <Bonus />
        <CallToAction />
        <Palestrantes />
        <Participar />
        <Depoimentos />
        <Duvidas />
        <Footer />
  </>
  )
}
