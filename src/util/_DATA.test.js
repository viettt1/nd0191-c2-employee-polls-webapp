const { _saveQuestionAnswer, _saveQuestion } = require("./_DATA");
describe("_saveQuestionAnswer", () => {
    it("Should return true with correct User", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: "optionTwo"
        });

        expect(response).toBeTruthy();
    });

    it("Should return error with invalid User", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: undefined,
            answer: "optionTwo"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});

describe("_saveQuestion", () => {
    it("Should return formated question with correct author", async () => {
        setTimeout(async () => {
            const response = await _saveQuestion({
                optionOneText: 'option one test',
                optionTwoText: 'option two test',
                author: {
                    id: 'tylermcginnis'
                }
            })

            expect(response.author).toBe('tylermcginnis')
        }, 1000)
    });

    it("Should return error with invalid User", async () => {
        const response = await _saveQuestion({
            optionOneText: 'option one test',
            optionTwoText: 'option two test',
            author: undefined
        }).catch(e => e);

        expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});