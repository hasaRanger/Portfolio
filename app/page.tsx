import Sidebar from './components/layout/Sidebar'
import TabBar from './components/layout/TabBar'
import StatusBar from './components/layout/StatusBar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'
import MobileTabBar from './components/layout/MobileTabBar'
import MobileNav from './components/layout/MobileNav'
import { ActiveFileProvider } from './context/ActiveFileContext'
import EditorShell from './components/layout/EditorShell'

export default function Page() {
  return (
    <ActiveFileProvider>

      {/* DESKTOP layout */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '240px 1fr',
          gridTemplateRows: '36px 1fr 24px',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundColor: '#1e1e1e',
        }}
      >
        <div style={{ gridColumn: '1', gridRow: '1 / 4', zIndex: 50 }}>
          <Sidebar />
        </div>
        <div style={{ gridColumn: '2', gridRow: '1', zIndex: 40 }}>
          <TabBar />
        </div>

        {/* EditorShell handles gutter + content + dynamic line count */}
        <EditorShell />

        <div style={{ gridColumn: '2', gridRow: '3', zIndex: 50 }}>
          <StatusBar />
        </div>
      </div>

      {/* MOBILE layout */}
      <div
        className="flex md:hidden flex-col"
        style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#1e1e1e' }}
      >
        <MobileTabBar />

        {/* MOBILE main */}
        <main
          id="mobile-main"
          className="editor-scroll overflow-x-hidden"
          style={{ flex: 1, overflowY: 'auto', backgroundColor: '#1e1e1e', paddingBottom: '52px' }}
        >
          <div style={{ padding: '24px 20px' }}>
            <div id="m-hero"><Hero /></div>
            <div id="m-projects"><Projects /></div>
            <div id="m-techstack"><TechStack /></div>
            <div id="m-contact"><Contact /></div>
          </div>
        </main>

        <MobileNav />
      </div>

    </ActiveFileProvider>
  )
}