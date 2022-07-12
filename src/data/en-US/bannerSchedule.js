import { CHARACTERS } from "./characters/characterList"

const CNBanners = [
    {
        name: "Lin",
        subtext: "Limited Banner only",
        start: "9 Jul 2022",
        end: "29 Jul 2022",
        duration: "20d",
        week: "30~33"
    },
    {
        name: "Frigg",
        subtext: "Standard afterwards",
        start: "23 Jun 2022",
        end: "9 Jul 2022",
        duration: "16d",
        week: "28~30"
    },
    {
        name: "Nemesis",
        subtext: "Standard afterwards",
        start: "23 Jun 2022",
        end: "9 Jul 2022",
        duration: "16d",
        week: "28~30"
    },
    {
        name: "Saki Fuwa",
        subtext: "",
        start: "03 Jun 2022",
        end: "23 Jun 2022",
        duration: "20d",
        week: "25~28"
    },
    {
        name: "Marc",
        subtext: "Collaboration Event",
        start: "24 May 2022",
        end: "3 Jun 2022",
        duration: "10d",
        week: "24~25"
    },
    {
        name: "Baiyuekui",
        subtext: "Collaboration Event",
        start: "13 May 2022",
        end: "23 May 2022",
        duration: "10d",
        week: "22~24"
    },
    {
        name: "Ruby",
        subtext: "",
        start: "25 Apr 2022",
        end: "13 May 2022",
        duration: "18d",
        week: "20~22"
    },
    {
        name: "Cobalt-B",
        subtext: "Standard afterwards",
        start: "13 Apr 2022",
        end: "27 Apr 2022",
        duration: "14d",
        week: "18~20"
    },
    {
        name: "Frigg",
        subtext: "",
        start: "25 Mar 2022",
        end: "12 Apr 2022",
        duration: "18d",
        week: "15~18"
    },
    {
        name: "Claudia",
        subtext: "Standard afterwards",
        start: "19 Mar 2022",
        end: "21 Mar 2022",
        duration: "2d",
        week: "14/15"
    },
    {
        name: "Nemesis",
        subtext: "",
        start: "05 Mar 2022",
        end: "24 Mar 2022",
        duration: "19d",
        week: "12~15"
    },
    {
        name: "Marc",
        subtext: "Collaboration Event",
        start: "14 Feb 2022",
        end: "4 Mar 2022",
        duration: "18d",
        week: "10~12"
    },
    {
        name: "Baiyuekui",
        subtext: "Collaboration Event",
        start: "26 Jan 2022",
        end: "13 Feb 2022",
        duration: "18d",
        week: "7~9"
    },
    {
        name: "Cobalt-B",
        subtext: "",
        start: "8 Jan 2022",
        end: "26 Jan 2022",
        duration: "18d",
        week: "4~7"
    },
    {
        name: "Claudia",
        subtext: "",
        start: "22 Dec 2021",
        end: "5 Jan 2022",
        duration: "14d",
        week: "2~4"
    }
]

const Banners = [
    {
        name: "",
        subtext: "",
        start: "",
        end: "",
        duration: "",
        week: ""
    }
]

CNBanners.forEach(banner => {
    const thisCharacter = CHARACTERS.find(character => character.name === banner.name);
    banner.element = thisCharacter.weapon.element;
})

export { CNBanners };
export { Banners };