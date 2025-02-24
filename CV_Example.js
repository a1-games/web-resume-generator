
const EXAMPLE_CV = {"name":"Your Name Here","oneliner":"Lorem ipsum dolor sit amet, consectetur\ncommodo consequat","shortinfo":[{"shortinfo_container":[{"icontype":"website","text":"Portfolio: a1creator.com"}]},{"shortinfotitle":"Contact"},"seperationline",{"shortinfo_container":[{"icontype":"phone","text":"+XX XXX XXX XXXX"},{"icontype":"location","text":"Location, Country"},{"icontype":"email","text":"professional@gmail.com"}]},{"shortinfotitle":"Skills"},"seperationline",{"shortinfo_container":[{"icontype":"checkmark","text":"Skill 1"},{"icontype":"checkmark","text":"Skill 2"},{"icontype":"checkmark","text":"Skill 3"},{"icontype":"checkmark","text":"Skill 4"}]},{"shortinfotitle":"Languages"},"seperationline",{"shortinfo_container":[{"icontype":"checkmark","text":"C#"},{"icontype":"checkmark","text":"C++"},{"icontype":"checkmark","text":"python"},{"icontype":"checkmark","text":"Javascript"},{"icontype":"checkmark","text":"HTML & CSS"}]},{"shortinfo_container":[{"icontype":"flag_eng","text":"Native"}]}],"info":[{"infotitle":"Profile"},"seperationline",{"info":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},{"infotitle":"Experience"},"seperationline",{"info":{"datetime":"2010 - 2015","location":"Work place","title":"Job Title 1","text":"Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur."}},{"info":{"datetime":"2015 - 2020","location":"Work place","title":"Job Title 2","text":"Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur."}},{"info":{"datetime":"2020 - Ongoing","location":"Work place","title":"Job Title 3","text":"Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur."}},{"infotitle":"Education"},"seperationline",{"info":{"datetime":"0000 - 0000","location":"School","title":"Degree Title","text":"Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur."}}],"color":"#10c838","background":2,"remsize":"15","shortinf":"1.3","infsize":"1.4"}

function LoadCVExample()
{

    
    
    // headline
    
    setHeadlineName("Your Name Here");
    
    setOnelinerText("Lorem ipsum dolor sit amet, consectetur\ncommodo consequat");
    
    
    
    // bullet point information
    
    addLineToShortinfoArray("website", "Portfolio: a1creator.com", true, "https://a1creator.com");
    appendShortInfo();
    
    insertInformationTitle("Contact", shortinfContainer);
    
    insertSeperationLine(shortinfContainer);
    
    addLineToShortinfoArray("phone", "+XX XXX XXX XXXX", true);
    addLineToShortinfoArray("location", "Location, Country", true);
    addLineToShortinfoArray("email", "professional@gmail.com", true);
    appendShortInfo();
    
    insertInformationTitle("Skills", shortinfContainer);
    
    insertSeperationLine(shortinfContainer);
    
    addLineToShortinfoArray("checkmark", "Skill 1", true);
    addLineToShortinfoArray("checkmark", "Skill 2", true);
    addLineToShortinfoArray("checkmark", "Skill 3", true);
    addLineToShortinfoArray("checkmark", "Skill 4", true);
    appendShortInfo();
    
    insertInformationTitle("Languages", shortinfContainer);
    
    insertSeperationLine(shortinfContainer);
    
    addLineToShortinfoArray("checkmark", "C#", true);
    addLineToShortinfoArray("checkmark", "C++", true);
    addLineToShortinfoArray("checkmark", "python", true);
    addLineToShortinfoArray("checkmark", "Javascript", true);
    addLineToShortinfoArray("checkmark", "HTML & CSS", true);
    appendShortInfo();
    
    
    addLineToShortinfoArray("flag_eng", "Native", false);
    appendShortInfo();
    
    
    
    // profile
    insertInformationTitle("Profile", infContainer);
    
    insertSeperationLine(infContainer);
    
    insertText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    
    
    // text information
    
    insertInformationTitle("Experience", infContainer);
    
    insertSeperationLine(infContainer);
    
    insertInformation("2010 - 2015",
        "Work place",
        "Job Title 1",
        "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur.");
    
    insertInformation("2015 - 2020",
        "Work place",
        "Job Title 2",
        "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur.");
    
    insertInformation("2020 - Ongoing",
        "Work place",
        "Job Title 3",
        "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur.");
    
    insertInformationTitle("Education", infContainer);
    
    insertSeperationLine(infContainer);
    
    insertInformation("0000 - 0000",
        "School",
        "Degree Title",
        "Ut enim ad minima veniam, quis nostrum exercita tionem ullam corporis suscipit labo riosam, nisi ut aliquid ex ea commodi consequatur.");
        
                    
                    
                    
                    
                    
}


