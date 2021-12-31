import DiaryRepository from "../../src/data/diary/repository/diary_repository.vue";
test("create diary with empty title", 
    async () => {
        const value = await DiaryRepository.methods.createDiary("","Body","2021-12-31");
        expect(value).toEqual("Please enter a title for the diary");
    }
);
test("create diary with empty content", 
    async () => {
        const value = await DiaryRepository.methods.createDiary("Title","","2021-12-31");
        expect(value).toEqual("Please enter content for the diary");
    }
);
test("create diary with empty date", 
    async () => {
        const value = await DiaryRepository.methods.createDiary("Title","Body",null);
        expect(value).toEqual("Please choose a date for the diary");
    }
);
test("update diary with empty title", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("1","","Body","2021-12-31");
        expect(value).toEqual("Please enter a title for the diary");
    }
);
test("update diary with empty content", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("1","Title","","2021-12-31");
        expect(value).toEqual("Please enter content for the diary");
    }
);
test("update diary with empty date", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("1","Title","Body",null);
        expect(value).toEqual("Please choose a date for the diary");
    }
);
