import HeroImage from '../_components/Hero/HeroImage';
import HeroSlogan from '../_components/Hero/HeroSlogan';
import HomeClientSections from '../_components/Home/HomeClientSection';
import { env } from '../_config/env';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex items-center mb-[25vh]">
        <HeroImage />
        <HeroSlogan />
      </section>

      {/**
       * Apps Showcase, Blog and Contact
       *
       * This section was outsourced to make this page.tsx a server component
       * and thus be able to access env vars.
       */}
      <HomeClientSections
        showAppsSection={env.showAppsSection}
        showBlogSection={env.showBlogSection}
      />
    </div>
  );
}
