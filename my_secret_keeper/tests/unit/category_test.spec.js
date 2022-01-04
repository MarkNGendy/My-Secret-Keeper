import CategoryRepository from "../../src/data/category/repository/category_repository.vue";
test("create category with empty name", 
    async () => {
        const value = await CategoryRepository.methods.createCategory("")
        expect(value).toEqual("Please enter name for category");
    }
);
test("update category with empty name", 
    async () => {
        const value = await CategoryRepository.methods.updateCategory("1","")
        expect(value).toEqual("Please enter name for category");
    }
);

test("update category with empty id", async () => {
  const value = await CategoryRepository.methods.updateCategory("", "Hello");
  expect(value).toEqual("Cannot update the desired diary");
});

test("delete category with empty id", async () => {
  const value = await CategoryRepository.methods.deleteCategory("");
  expect(value).toEqual("Cannot delete the desired diary");
});