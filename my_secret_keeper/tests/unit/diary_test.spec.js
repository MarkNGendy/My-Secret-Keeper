import DiaryRepository from "../../src/data/user/repository/diary_repository.vue";
test("create diary with empty body", 
    async () => {
        const value = await DiaryRepository.methods.createDiary("","Title");
        expect(value).toEqual("Enter Body");
    }
);
test("create diary with empty title", 
    async () => {
        const value = await DiaryRepository.methods.createDiary("Body","");
        expect(value).toEqual("Enter Diary Title");
    }
);
test("update diary with invalid id", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("1","Body","Title");
        expect(value).toEqual("Invalid Diary");
    }
);
test("update diary with empty body", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("9S5BW9bcRKpvHPcSNuYX","","Title");
        expect(value).toEqual("Enter Body");
    }
);
test("update diary with empty title", 
    async () => {
        const value = await DiaryRepository.methods.updateDiary("9S5BW9bcRKpvHPcSNuYX","Body","");
        expect(value).toEqual("Enter Diary Title");
    }
);
test("delete diary with invalid id", 
    async () => {
        const value = await DiaryRepository.methods.deleteDiary("1");
        expect(value).toEqual("Invalid Diary");
    }
);