const { getMentorInfo, mentors } = require("../src/3")


test("getMentorInfo adds a job title of Junior developer if yearsExp less than 10", () => {
    const result = getMentorInfo(mentors, "Irina")
    expect(result).toEqual({
        fullName: "Dr. Irina",
        jobTitle: "Junior Developer",
        name: "Irina",
        title: "Dr.",
        yearsOfExp: 10
    })
})

test("getMentorInfo adds a job title of Senior developer if yearsExp greater than 10", () => {
    const result = getMentorInfo(mentors, "Ashleigh")
    expect(result).toEqual({
        fullName: "Dame Ashleigh",
        jobTitle: "Senior Developer",
        name: "Ashleigh",
        title: "Dame",
        yearsOfExp: 20
    })
})

test("getMentorInfo adds a job title of Very Senior developer if yearsExp greater than 20", () => {
    const result = getMentorInfo(mentors, "Etza")
    expect(result).toEqual({
        fullName: "Professor Etza",
        jobTitle: "Very Senior Developer",
        name: "Etza",
        title: "Professor",
        yearsOfExp: 30
    })
})