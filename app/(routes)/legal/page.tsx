import * as Constants from "@/app/constants";

export default function Legal() {
    return (
        <section className="mt-40 flex flex-col gap-10">
            <div>
                <h1 className="text-xl text-neutral-400 font-medium pb-4">Impressum gem. § 5 DDG</h1>
                <p>
                    {Constants.FULL_NAME}<br/>
                    {Constants.ADDRESS}<br/>
                    {Constants.CITY}
                </p>
            </div>

            <div>
                <h2 className="text-neutral-400 font-medium pb-4">Kontakt</h2>
                <p>
                    Telefon: {Constants.PHONE_NUMBER}<br/>
                    E-Mail: <a className="underline decoration-dotted"
                               href={`mailto:${Constants.EMAIL_ADDRESS}`}>{Constants.EMAIL_ADDRESS}</a>
                </p>
            </div>

            <div>
                <h2 className="text-neutral-400 font-medium pb-4">Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV</h2>
                <p>
                    {Constants.FULL_NAME} (siehe oben)
                </p>
            </div>
        </section>
    );
}