export default function Legal() {
    return (
        <div className="container mt-40">
            <div className="flex flex-col gap-10 text-black">
                <div>
                    <h1 className="text-xl text-neutral-400 font-medium pb-4">Impressum gem. § 5 DDG</h1>
                    <p>
                        Benjamin Saalfeld<br/>
                        Charlotte-Temming-Str. 3<br/>
                        44135 Dortmund
                    </p>
                </div>

                <div>
                    <h2 className="text-neutral-400 font-medium pb-4">Kontakt</h2>
                    <p>
                        Telefon: auf Anfrage<br/>
                        E-Mail: baeni.saa@gmail.de
                    </p>
                </div>

                <div>
                    <h2 className="text-neutral-400 font-medium pb-4">Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV</h2>
                    <p>
                        Benjamin Saalfeld (siehe oben)
                    </p>
                </div>
            </div>
        </div>
    );
}