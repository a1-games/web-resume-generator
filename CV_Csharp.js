



// headline

setHeadlineName("Asbjørn Ørts Johnsen");

setOnelinerText("Stærk C#-programmør med\nfullstack-kompetencer");



// short information

addLineToShortinfoArray("website", "Porteføje: a1creator.com", true, "https://a1creator.com");
appendShortInfo();

insertInformationTitle("Kontakt", shortinfContainer);

insertSeperationLine(shortinfContainer);


addLineToShortinfoArray("phone", "+45 50 46 38 28", true);
addLineToShortinfoArray("location", "Brabrand, Aarhus", true);
addLineToShortinfoArray("email", "asbjorn15johnsen@gmail.com", true);
appendShortInfo();

insertInformationTitle("Evner", shortinfContainer);

insertSeperationLine(shortinfContainer);

addLineToShortinfoArray("checkmark", "Front End", true);
addLineToShortinfoArray("checkmark", "Back End", true);
addLineToShortinfoArray("checkmark", "Problem Solving", true);
addLineToShortinfoArray("checkmark", "Object-Oriented Programming", true);
addLineToShortinfoArray("checkmark", "Perfomance-Minded Optimization", true);
addLineToShortinfoArray("checkmark", "Computer Literacy", true);
addLineToShortinfoArray("checkmark", "Windows, Apple, iOS & Android", true);
appendShortInfo();

insertInformationTitle("Sprog", shortinfContainer);

insertSeperationLine(shortinfContainer);

addLineToShortinfoArray("checkmark", "C#", true);
addLineToShortinfoArray("checkmark", "Javascript", true);
addLineToShortinfoArray("checkmark", "HTML & CSS", true);
addLineToShortinfoArray("checkmark", "python", true);
addLineToShortinfoArray("checkmark", "SQL", true);
addLineToShortinfoArray("checkmark", "JSON", true);
appendShortInfo();

addLineToShortinfoArray("flag_dk", "Modersmål", false);
addLineToShortinfoArray("flag_eng", "Flydende", false);
appendShortInfo();

// profile
insertInformationTitle("Profil", infContainer);

insertSeperationLine(infContainer);

insertText("Jeg ser mig selv som en passioneret programmør, som altid er i gang med at lære noget nyt. Min erfaring indeholder web-, mobil- og pc-udvikling. Jeg arbejder med mange forskellige sprog, blandt andet HTML, CSS, Javascript, C# and python. Jeg udvikler desuden altid med performance i mente.", infContainer)


// long information

insertInformationTitle("Erfaring", infContainer);

insertSeperationLine(infContainer);

insertInformation("2021 - 2024",
                    "a1games",
                    "Solo Indie-Spiludvikler",
                    "Arbejdede på flere forskellige spil. Udgav 5 apps på Google Play Store. Udgav et færdigt computerspil på Steam.");
                    
insertInformation("2022 Sep - Okt",
                    "Lunch Money Games",
                    "Visual Effects & Shaders",
                    "Praktikant ved Lunch Money Games med ansvar for visuelle effekter og shaders. Jeg lavede partikeleffekter og skrev shaders til spillet Calcium Chaos. Jeg stoppede for at fokusere på at udgive mit eget computerspil.");


insertInformationTitle("Uddannelse", infContainer);

insertSeperationLine(infContainer);

insertInformation("2021, Jan - Juli",
                    "Vallekilde Højskole",
                    "Spiludvikling i C#",
                    "Intro til Unity and C#. Under kurset udviklede jeg mine to første spil i C# med Unity.");

insertInformation("2021 - 2024",
                    "Dania Games Grenaa",
                    "Datamatiker - Programmering i C# .NET",
                    "Javascript, HTML & CSS, C#, python, SQL, JSON. Netværkskode i C# og python. Under uddannelsen producerede jeg 5 apps, som blev udgivet på Google Play Store til Android.");
