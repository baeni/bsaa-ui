import * as Constants from '@/app/constants';

export default function LegalNotice() {
  return (
    <section className="mt-40 flex flex-col gap-10">
      <div>
        <h1 className="text-xl text-neutral-400 font-medium pb-4">
          Legal notice pursuant to § 5 DDG
        </h1>
        <p>
          {Constants.FULL_NAME}
          <br />
          {Constants.ADDRESS}
          <br />
          {Constants.CITY}
        </p>
      </div>

      <div>
        <h2 className="text-neutral-400 font-medium pb-4">Contact</h2>
        <p>
          Phone: {Constants.PHONE_NUMBER}
          <br />
          E-Mail:{' '}
          <a
            className="underline decoration-dotted"
            href={`mailto:${Constants.EMAIL_ADDRESS}`}
          >
            {Constants.EMAIL_ADDRESS}
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-neutral-400 font-medium pb-4">
          Responsible for content pursuant to Section 18 (2) MStV
        </h2>
        <p>{Constants.FULL_NAME} (address as above)</p>
      </div>
    </section>
  );
}
