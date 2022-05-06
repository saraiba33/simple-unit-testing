const mentors = [{
    name: 'Irina',
    title: 'Dr.',
    yearsOfExp: 10
}, {
    name: 'Ashleigh',
    title: 'Dame',

    yearsOfExp: 20
}, {
    name: 'Etza',
    title: 'Professor',
    yearsOfExp: 30
}];

function getMentorInfo(mentors, name) {
    let result = mentors.find(function(person) {
        return person.name === name;
    });
    let mentorTitle = '';
    if (result.yearsOfExp > 20) {
        mentorTitle = 'Very Senior Developer'
    } else if (result.yearsOfExp <= 10) {
        mentorTitle = 'Junior Developer';
    } else if (result.yearsOfExp > 10) {
        mentorTitle = 'Senior Developer';
    }
    result.jobTitle = mentorTitle;
    result.fullName = `${result.title} ${result.name}`

    return result;
}


module.exports = {
    getMentorInfo,
    mentors
}