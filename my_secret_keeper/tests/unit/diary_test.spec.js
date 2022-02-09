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
test("delete diary with empty title", 
async () => {
    const value = await DiaryRepository.methods.deleteDiary("2",null,"Body","2021-12-31");
    expect(value).toEqual("Invalid Operation");
}
);
test("delete diary with empty body", 
async () => {
    const value = await DiaryRepository.methods.deleteDiary("1","Title","","2021-12-31");
    expect(value).toEqual("Diary cannot be deleted");
}
);
test("delete diary with empty date", 
async () => {
    const value = await DiaryRepository.methods.deleteDiary("1","Title","Body",null);
    expect(value).toEqual("Diary cannot be deleted");
}
);

test("sort ascending", 
async () => {
    const diary1 = {
        date: "2021-06-03"
    };
    const diary2 = {
      date: "2021-06-04",
    };
    const diary3 = {
      date: "2021-07-04",
    };
    var diaries = [
        diary1, diary2, diary3
    ]
    const value = await DiaryRepository.methods.sortAscending(diaries);
    expect(value).toEqual(diaries);
}
);

test("sort descending", async () => {
  const diary1 = {
    date: "2021-06-03",
  };
  const diary2 = {
    date: "2021-06-04",
  };
  const diary3 = {
    date: "2021-07-04",
  };
  var diaries = [diary1, diary2, diary3];
  var sorted = [diary3, diary2, diary1];
  const value = await DiaryRepository.methods.sortDescending(diaries);
  expect(value).toEqual(sorted);
});

test("sort ascending then descending", async () => {
  const diary1 = {
    date: "2021-06-03",
  };
  const diary2 = {
    date: "2021-06-04",
  };
  const diary3 = {
    date: "2021-07-04",
  };
  var diaries = [diary1, diary2, diary3];
  var sorted = [diary3, diary2, diary1];
  var value = await DiaryRepository.methods.sortAscending(diaries);
  value = await DiaryRepository.methods.sortDescending(diaries);
  expect(value).toEqual(sorted);
});

test("sort descending then ascending", async () => {
  const diary1 = {
    date: "2021-06-03",
  };
  const diary2 = {
    date: "2021-06-04",
  };
  const diary3 = {
    date: "2021-07-04",
  };
  var diaries = [diary1, diary2, diary3];
  var sorted = [diary3, diary2, diary1];
  var value = await DiaryRepository.methods.sortDescending(diaries);
  value = await DiaryRepository.methods.sortAscending(diaries);
  expect(value).toEqual(diaries);
});

test("sort ascending then descending then ascending", async () => {
  const diary1 = {
    date: "2021-06-03",
  };
  const diary2 = {
    date: "2021-06-04",
  };
  const diary3 = {
    date: "2021-07-04",
  };
  var diaries = [diary1, diary2, diary3];
  var sorted = [diary3, diary2, diary1];
  var value = await DiaryRepository.methods.sortAscending(diaries);
  value = await DiaryRepository.methods.sortDescending(diaries);
  value = await DiaryRepository.methods.sortAscending(diaries);
  expect(value).toEqual(diaries);
});
