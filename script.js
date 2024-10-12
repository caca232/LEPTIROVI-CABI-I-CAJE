document.getElementById('talkButton').addEventListener('click', function() {
    const dialogue = document.getElementById('dialogue');
    const texts = [
        "Cajih: Ćao, ja sam tvoj leptir koji će te čuvati i spasiti od svega.",
        "Cabi: Ali ja više ne mogu vjerovati nikome.",
        "Cajih: Znam, razumijem te, ali moraš mi pružiti šansu da ti popravim srce i tebe.",
        "Cabi: Teško ću to uraditi, ne mogu više nikome vjerovati.",
        "Cajih: Ali da bi bila srećna u životu, moraš nekome pružiti šansu.",
        "Cabi: U redu, dajem ti šansu i svoje srce na čuvanje da ga popraviš.",
        "Cajih: U redu, hvala, obećavam da ću ti popraviti srce, vratiti vjeru u ljude i uvijek biti tu za tebe. Nikada te neću prestati voljeti, ti si moj mali leptir kojeg ću čuvati i paziti dok sam živ. Obavezujem se da ću tvoje srce čuvati da mu više niko ne naudi. Obećavam, ZAUVIJEK!",
        "Cabi: Stvarno? To je nemoguće!",
        "Cajih: Bebi, sve je moguće kada je ljubav uzrok tome, a ja ću se truditi uvijek da ti budeš srećna i da ispunjavam sva obećanja koja sam ti dao, a najviše ovo glavno obećanje.",
        "Cabi: Hvala ti, mnogo mi to znači. Nikada nisam to dobila od nijedne osobe.",
        "Cajih: Obećavam ti da ću se zauvijek truditi za tebe i da ću biti uz tebe u svemu, kroz sve, bilo kada i bilo gdje, i da te nikada neću napustiti!",
        "Cajih: I još jedna stvar, bebojino...",
        "Cajih: VOLIM TE NAJVIŠE NA SVIJETU, HANUME MOJA!"
    ];
    
    // Resetovanje dijaloga
    dialogue.innerHTML = '';

    texts.forEach((text, index) => {
        setTimeout(() => {
            dialogue.innerHTML = text;
        }, index * 7000); // Svaka poruka se pojavljuje svake 7 sekundi
    });
});

