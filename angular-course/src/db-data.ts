

export const COURSES: any = [
 
    {
        id: 1,
        description: "Venti",
        longDescription: "One of the many bards of Mondstadt, who freely wanders the city’s streets and alleys.",
        iconUrl: '../assets/venti.png',
        
    },
    {
        id: 2,
        description: "Zhongli",
        iconUrl: '../assets/zhongli.png',
        longDescription: "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        category: 'BEGINNER',
      
    },

    {
        id: 3,
        description: 'Kamisato Ayaka',
        longDescription: "Daughter of the Yashiro Commission’s Kamisato Clan. Dignified and elegant, as well as wise and strong.",
        iconUrl: '../assets/ayaka.png',
        category: 'ADVANCED'
    },

    {
        id: 4,
        description: "Eula",
        /*iconUrl: '../assets/eula.png',*/
        longDescription: "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company.",
        category: 'BEGINNER',
       
    },
    {
        id: 5,
        description: 'Raiden Shogun',
        longDescription: "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
        iconUrl: '../assets/raiden.png',
        category: 'ADVANCED',
        
    },
    {
        id: 6,
        description: 'Kaedehara Kazuha',
        longDescription: "A wandering samurai from Inazuma who is currently with Liyue’s Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.",
        iconUrl: '../assets/kazuha.png',
        category: 'ADVANCED',
        
    },
    {
        id: 7,
        description: 'Diluc',
        longDescription: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
        iconUrl: '../assets/diluc.png',
        category: 'ADVANCED'
    },
    {
        id: 8,
        description: 'Xiao',
        longDescription: "A yaksha adeptus who defends Liyue. Also heralded as the “Conqueror of Demons” and “Vigilant Yaksha.”",
        iconUrl: '../assets/xiao.png',
        category: 'BEGINNER'
    },
    {
        id: 9,
        description: 'Tartaglia',
        longDescription: "No. 11 of The Harbingers, also known as “Childe.” His name is highly feared on the battlefield.",
        iconUrl: '../assets/childe.png',
        category: 'BEGINNER'
    },
    {
        id: 10,
        description: "Yelan",
        iconUrl: "../assets/yelan.png",
        longDescription: "A mysterious person who claims to work for the Ministry of Civil Affairs, but is a “non-entity” on the Ministry of Civil Affairs’ list.",
        category: 'ADVANCED'
    }

];


export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id === courseId);
}