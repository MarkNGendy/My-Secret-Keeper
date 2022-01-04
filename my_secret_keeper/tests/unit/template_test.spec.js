import TemplateRepository from "../../src/data/template/repository/template_repository.vue";
test("create template with empty name", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("","How Was Your day?")
        expect(value).toEqual("Please enter a name for the template");
    }
);
test("create template with empty name", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("",["What did you do today?","How was your day?"])
        expect(value).toEqual("Please enter a name for the template");
    }
);
test("create template with empty questions", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("My Daily Template",null)
        expect(value).toEqual("Please enter questions");
    }
);
test("create template with empty questions", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("A Work Day",null)
        expect(value).toEqual("Please enter questions");
    }
);
test("create template with an empty question", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("My Daily Template",["How Was your day?",null])
        expect(value).toEqual("There is an Empty Question");
    }
);
test("create template with an empty question", 
    async () => {
        const value = await TemplateRepository.methods.CreateTemplate("A Work Day",["How Was your day?",null,"What did you learn?"])
        expect(value).toEqual("There is an Empty Question");
    }
);

