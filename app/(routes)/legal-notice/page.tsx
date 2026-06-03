import { siteConfig } from '@/app/_config/siteConfig';

export default function LegalNotice() {
  return (
    <section className="mt-40 flex flex-col gap-10">
      <div>
        <h1 className="text-xl text-neutral-400 font-medium pb-4">
          Legal notice pursuant to § 5 DDG
        </h1>
        <p>
          {siteConfig.legal.fullName}
          <br />
          {siteConfig.legal.address}
          <br />
          {siteConfig.legal.city}
        </p>
      </div>

      <div>
        <h2 className="text-neutral-400 font-medium pb-4">Contact</h2>
        <p>
          Phone: {siteConfig.legal.phone}
          <br />
          E-Mail:{' '}
          <a
            className="underline decoration-dotted"
            href={`mailto:${siteConfig.legal.email}`}
          >
            {siteConfig.legal.email}
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-neutral-400 font-medium pb-4">
          Responsible for content pursuant to Section 18 (2) MStV
        </h2>
        <p>{siteConfig.legal.fullName} (address as above)</p>
      </div>
    </section>
  );
}
