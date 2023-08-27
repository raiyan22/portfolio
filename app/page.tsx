import TopSection from './top-section'
import DescriptionSection from './desc-section'
import InfoSection from './information-section'

export default function Home() {
  const infoString = "Information"
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-3 md:p-2 font-mono">
      <TopSection />
      <DescriptionSection/>
      <InfoSection title={infoString}/>
    </main>
  )
}
