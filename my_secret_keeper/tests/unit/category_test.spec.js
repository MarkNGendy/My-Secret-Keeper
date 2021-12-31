import CategoryRepository from "../../src/data/category/repository/category_repository.vue";
test("create category with empty name", 
    async () => {
        const value = await CategoryRepository.methods.createCategory("","image.png")
        expect(value).toEqual("Please enter name for category");
    }
);
test("create category with empty icon", 
    async () => {
        const value = await CategoryRepository.methods.createCategory("category","")
        expect(value).toEqual("Please enter icon for category");
    }
);
test("update category with empty name", 
    async () => {
        const value = await CategoryRepository.methods.updateCategory("1","","image.png")
        expect(value).toEqual("Please enter name for category");
    }
);
test("update category with empty icon", 
    async () => {
        const value = await CategoryRepository.methods.updateCategory("1","category","")
        expect(value).toEqual("Please enter icon for category");
    }
);