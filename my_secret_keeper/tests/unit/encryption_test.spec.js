import DiaryFirebaseManager from '../../src/data/diary/firebase/diary_firebase_manager.vue';

test("encrypt a word",
    async() => {
      const s = "Hello";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt a sentence",
    async() => {
      const s = "Hello encryption   testing \t encryption";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt a space",
    async() => {
      const s = " ";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt null",
    async() => {
      const s = "";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt an arabic word",
    async() => {
      const s = "مرحباً";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt an arabic sentence",
    async() => {
      const s = "السلام عليكم، اهلا";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt a numbers",
    async() => {
      const s = "1245789";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt symbols",
    async() => {
      const s = "♀♣♫Yc↨♂☺☻♥♦♣";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt a paragraph",
    async() => {
      const s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt special characters",
    async() => {
      const s = "\n\t\s";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt symbols, numbers and letters",
    async() => {
      const s = "○○○ hello 123 ○○○";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);
test("encrypt mixed sentence",
    async() => {
      const s = "Hello أهلاً";
      const enc = DiaryFirebaseManager.methods.encrypt(s);
      const dec = DiaryFirebaseManager.methods.decrypt(enc);
      expect(dec).toEqual(s);
    }
);







