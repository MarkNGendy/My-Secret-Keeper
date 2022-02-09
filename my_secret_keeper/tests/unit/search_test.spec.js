import DiaryRepository from "../../src/data/diary/repository/diary_repository.vue";

var diaries = [
    {  date: '1/9/2021', title: "Dog", body: "This is my dog" , category:"Animals" },
    {  date: '2/15/2021', title: "Vikings", body: "My favourite series" , category:"Movies" },
    {  date: '5/20/2021', title: "Cat", body: "I love my pet" , category:"Animals" },
    {  date: '12/11/2021', title: "Game of thrones", body: "The best series " , category:"Movies" },
    {  date: '2/2/2022', title: "Lion", body: "Fierce Animal" , category:"Animals" },
    {  date: '22/1/2022', title: "Breaking Bad", body: "In my Watch list" , category:"Movies" },
    {  date: '1/9/2022', title: "Dog", body: "This is my dog semba" , category:"Animals" },

];

test("search by category", 
    async () => {
        var values = await DiaryRepository.methods.retrieveCategories(diaries,"Animals");
        var realValues = [
            { date: '1/9/2021', title: "Dog", body: "This is my dog" , category:"Animals" },
            { date: '5/20/2021', title: "Cat", body: "I love my pet" , category:"Animals" },
            { date: '2/2/2022', title: "Lion", body: "Fierce Animal" , category:"Animals" },
            {  date: '1/9/2022', title: "Dog", body: "This is my dog semba" , category:"Animals" },

        ];
        expect(values).toEqual(realValues);
    }
);
test("search by category", 
    async () => {
        var values = await DiaryRepository.methods.retrieveCategories(diaries,"Movies");
        var realValues = [
        {  date: '2/15/2021', title: "Vikings", body: "My favourite series" , category:"Movies" },
        {  date: '12/11/2021', title: "Game of thrones", body: "The best series " , category:"Movies" },
        {  date: '22/1/2022', title: "Breaking Bad", body: "In my Watch list" , category:"Movies" }
        ];
        expect(values).toEqual(realValues);
    }
);
test("search by non existing category", 
    async () => {
        var values = await DiaryRepository.methods.retrieveCategories(diaries,"Cars");
        var realValues =[];
        expect(values).toEqual(realValues);
    }
);
test("search by title", 
    async () => {
        var values = await DiaryRepository.methods.retrieveTitle(diaries,"Cat");
        var realValues = [
            {  date: '5/20/2021', title: "Cat", body: "I love my pet" , category:"Animals" },
        ];
        expect(values).toEqual(realValues);
    }
);
test("search by title", 
    async () => {
        var values = await DiaryRepository.methods.retrieveTitle(diaries,"Game of thrones");
        var realValues = [
            {  date: '12/11/2021', title: "Game of thrones", body: "The best series " , category:"Movies" },
        ];
        expect(values).toEqual(realValues);
    }
);
test("search by title", 
    async () => {
        var values = await DiaryRepository.methods.retrieveTitle(diaries,"Dog");
        var realValues = [
            { date: '1/9/2021', title: "Dog", body: "This is my dog" , category:"Animals" },
            {  date: '1/9/2022', title: "Dog", body: "This is my dog semba" , category:"Animals" },
        ];
        expect(values).toEqual(realValues);
    }
);
test("search by non existing title", 
    async () => {
        var values = await DiaryRepository.methods.retrieveTitle(diaries,"Car");
        var realValues = [];
        expect(values).toEqual(realValues);
    }
);
test("search by empty category id", 
    async () => {
        const value = await DiaryRepository.methods.retrieveDiariesByCategory("");
        expect(value).toEqual("Cannot Search by this category");
    }
);