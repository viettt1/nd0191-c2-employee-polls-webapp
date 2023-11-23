import { connect } from "react-redux";
import Card from "./Card";
import { useState } from "react";

const Dashboard = ({ authedUser, questions, users }) => {

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id) && !question.optionTwo.votes.includes(authedUser.id))
    const answered = (question) => (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id))

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="container">
            <div className="row-12 text-center">
                <h1>Dashboard</h1>
            </div>
            <div className="bloc-tabs">
                <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "btn btn-primary" : "btn"}>Unanswered</button>
                <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "btn btn-primary" : "btn"}>Answered</button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <div className="row">
                        <div className="col-12">
                            <div className="row row-cols-3">
                                {questions.filter(unanswered).map((question) => (
                                    <div className="col" style={{ paddingBottom: 'calc(var(--bs-gutter-x) * .5)', paddingTop: 'calc(var(--bs-gutter-x) * .5)' }} key={question.id}>
                                        <Card question={question} author={users[question.author]} hasVoted={false} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <div className="row">
                        <div className="col-12">
                            <div className="row row-cols-3">
                                {questions.filter(answered).map((question) => (
                                    <div className="col" style={{ paddingBottom: 'calc(var(--bs-gutter-x) * .5)', paddingTop: 'calc(var(--bs-gutter-x) * .5)' }} key={question.id}>
                                        <Card question={question} author={users[question.author]} hasVoted={true} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
    users,
});

export default connect(mapStateToProps)(Dashboard);
