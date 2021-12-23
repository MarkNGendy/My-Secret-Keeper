import UserRepository from "../../src/data/user/repository/user_repository.vue";



test("sign up with empty email", async () => {
  const value = await UserRepository.methods.signUp(
    "",
    "123456",
    "123456",
    "Mark"
  );
  expect(value).toEqual("Please enter a valid email");
});

test("sign up with empty username", async () => {
  const value = await UserRepository.methods.signUp(
    "test",
    "123456",
    "123456",
    ""
  );
  expect(value).toEqual("Please enter a valid user name");
});

test("sign up with empty password", async () => {
  const value = await UserRepository.methods.signUp("test@gmail.com", "", "123456", "Mark");
  expect(value).toEqual("Please enter a password");
});

test("sign up non matching passwords", async () => {
  const value = await UserRepository.methods.signUp(
    "mark@gmail.com",
    "12345",
    "123456",
    "Mark"
  );
  expect(value).toEqual("Passwords are not matching");
});

test("sign up with weak password", async () => {
  const value = await UserRepository.methods.signUp(
    "test@gmail.com",
    "123",
    "123",
    "Mark"
  );
  expect(value).toEqual("Please enter a valid email and password");
});

test("sign up with email already in use", async () => {
  const value = await UserRepository.methods.signUp(
    "test@gmail.com",
    "123456",
    "123456",
    "Mark"
  );
  expect(value).toEqual("Please enter a valid email and password");
});

test("sign up with invalid email", async () => {
  const value = await UserRepository.methods.signUp(
    "test",
    "123456",
    "123456",
    "Mark"
  );
  expect(value).toEqual("Please enter a valid email and password");
});

test("sign in with empty email", async () => {
  const value = await UserRepository.methods.signIn(
    "",
    "123456",
  );
  expect(value).toEqual("Please enter a valid email");
});

test("sign in with empty password", async () => {
  const value = await UserRepository.methods.signIn(
    "test@gmail.com",
    ""
  );
  expect(value).toEqual("Please enter a password");
});

test("sign in with unregistered email", async () => {
  const value = await UserRepository.methods.signIn(
    "test4654654@gmail.com",
    "123456",
  );
  expect(value).toEqual("Please enter a valid email and password");
});